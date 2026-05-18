import { useEffect, useRef } from "react";
import * as THREE from "three";
// import type { FeatureCollection, Polygon, MultiPolygon } from "geojson";

const AFRICAN_CITIES = [
  { name: "Nairobi", lat: -1.29, lng: 36.82 },
  { name: "Lagos", lat: 6.52, lng: 3.38 },
  { name: "Cairo", lat: 30.04, lng: 31.24 },
  { name: "Johannesburg", lat: -26.2, lng: 28.04 },
  { name: "Accra", lat: 5.56, lng: -0.2 },
  { name: "Addis Ababa", lat: 9.03, lng: 38.74 },
  { name: "Dar es Salaam", lat: -6.79, lng: 39.21 },
  { name: "Casablanca", lat: 33.57, lng: -7.59 },
  { name: "Kampala", lat: 0.32, lng: 32.58 },
  { name: "Dakar", lat: 14.72, lng: -17.47 },
  { name: "Lusaka", lat: -15.42, lng: 28.28 },
  { name: "Harare", lat: -17.83, lng: 31.05 },
];

const ACID = new THREE.Color("#b8f23c");
// const ACID2 = new THREE.Color("#b8f23c");
const R = 2; // globe radius

// lat/lng degrees → point on sphere surface
function latLngToVec3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

// Build line segments from a GeoJSON ring (array of [lng, lat] pairs)
function ringToPoints(coords: number[][]): THREE.Vector3[] {
  return coords.map(([lng, lat]) => latLngToVec3(lat, lng, R + 0.003));
}

// Sprite-based city label
function makeLabel(text: string): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, 256, 64);
  ctx.font = 'bold 22px "Space Mono", monospace';
  ctx.fillStyle = "rgba(184,242,60,0.92)";
  ctx.textBaseline = "middle";
  ctx.fillText(text.toUpperCase(), 10, 32);
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    depthTest: false,
  });
  const sp = new THREE.Sprite(mat);
  sp.scale.set(1.1, 0.28, 1);
  return sp;
}

interface PingState {
  ring: THREE.Mesh;
  dot: THREE.Mesh;
  label: THREE.Sprite;
  pos: THREE.Vector3;
  phase: number; // 0-1 animated progress, -N = waiting
  delay: number;
}

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    // Fill the container; actual resolution set by onResize below
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    // ── Globe sphere (transparent, just for depth/atmosphere) ─
    const sphereGeo = new THREE.SphereGeometry(R, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color("#0d2318"),
      transparent: true,
      opacity: 0.55,
      shininess: 18,
      depthWrite: false, // ← this is the key line
    });

    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // ── Atmosphere glow ───────────────────────────────────────
    const atmGeo = new THREE.SphereGeometry(R + 0.12, 64, 64);
    const atmMat = new THREE.MeshPhongMaterial({
      color: ACID,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // ── Lat / Lng grid lines ──────────────────────────────────
    const gridMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#b8f23c"),
      transparent: true,
      opacity: 0.1,
    });
    const gridGroup = new THREE.Group();

    // Latitude rings
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lng = -180; lng <= 181; lng += 3)
        pts.push(latLngToVec3(lat, lng, R + 0.001));
      gridGroup.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat),
      );
    }
    // Longitude rings
    for (let lng = -180; lng < 180; lng += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 3)
        pts.push(latLngToVec3(lat, lng, R + 0.001));
      gridGroup.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat),
      );
    }
    scene.add(gridGroup);

    // ── Globe group (rotates) ─────────────────────────────────
    const globe = new THREE.Group();
    globe.add(sphere);
    globe.add(gridGroup);
    // Africa center ~20°E: rotation = -(90+20)*π/180 = -1.92 rad so Africa faces camera
    globe.rotation.y = -1.92;
    scene.add(globe);

    // ── Country borders from GeoJSON ──────────────────────────
    const borderMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#b8f23c"),
      transparent: false,
      linewidth: 1,
    });
    const borderGroup = new THREE.Group();
    globe.add(borderGroup);

    interface GeoRing {
      type: string;
      coordinates: number[][][] | number[][][][];
    }
    interface GeoFeature {
      geometry: GeoRing;
    }
    interface GeoJson {
      features: GeoFeature[];
    }

    const processRings = (coords: number[][][]) => {
      coords.forEach((ring) => {
        const pts = ringToPoints(ring);
        if (pts.length < 2) return;
        borderGroup.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(pts),
            borderMat,
          ),
        );
      });
    };

    fetch("/data/countries.geojson")
      .then((r) => r.json())
      .then((geoJson: GeoJson) => {
        // console.log("features:", geoJson.features.length);
        geoJson.features.forEach((feature: GeoFeature) => {
          const geom = feature.geometry;
          if (geom.type === "Polygon") {
            processRings(geom.coordinates as number[][][]);
          } else if (geom.type === "MultiPolygon") {
            (geom.coordinates as number[][][][]).forEach((p: number[][][]) =>
              processRings(p),
            );
          }
        });
      })
      .catch(() => {});
    // ── City pings ────────────────────────────────────────────
    const pings: PingState[] = AFRICAN_CITIES.map((city, i) => {
      const pos = latLngToVec3(city.lat, city.lng, R);

      // Dot
      const dotGeo = new THREE.SphereGeometry(0.025, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: ACID,
        transparent: true,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos.clone().multiplyScalar(1.004));

      // Ping ring (flat disc that scales outward)
      const ringGeo = new THREE.RingGeometry(0.01, 0.04, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: ACID,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      // Orient ring to face outward (normal = radial direction)
      ring.position.copy(pos.clone().multiplyScalar(1.005));
      ring.lookAt(pos.clone().multiplyScalar(3));

      // Label sprite
      const label = makeLabel(city.name);
      const labelPos = pos.clone().multiplyScalar(1.14);
      label.position.copy(labelPos);
      label.material.opacity = 0;

      globe.add(dot);
      globe.add(ring);
      globe.add(label);

      return { ring, dot, label, pos, phase: -i * 0.18, delay: i * 0.18 };
    });

    // ── Lighting ──────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xb8f23c, 0.6);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.2);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    // ── Animation loop ────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();
    let scrollT = 0;
    let tSmooth = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Slow spin
      globe.rotation.y += delta * 0.08;

      // City ping animations
      pings.forEach((p) => {
        p.phase += delta * 0.55;
        if (p.phase < 0) {
          // waiting — hide everything
          (p.dot.material as THREE.MeshBasicMaterial).opacity = 0;
          (p.ring.material as THREE.MeshBasicMaterial).opacity = 0;
          p.label.material.opacity = 0;
          return;
        }

        const t = p.phase % 1.6; // cycle period 1.6s
        const RING_PHASE = 0.6; // ring expands for 0.6s
        const DOT_PHASE = 1.0; // dot visible until 1.0s
        const FADE_START = 1.2; // label fades from 1.2s

        // Ring: expand and fade
        if (t < RING_PHASE) {
          const prog = t / RING_PHASE;
          p.ring.scale.setScalar(1 + prog * 5);
          (p.ring.material as THREE.MeshBasicMaterial).opacity =
            0.8 * (1 - prog);
        } else {
          p.ring.scale.setScalar(1);
          (p.ring.material as THREE.MeshBasicMaterial).opacity = 0;
        }

        // Dot: visible and pulsing
        const dotVisible = t < DOT_PHASE;
        const pulse = 1 + 0.25 * Math.sin(p.phase * Math.PI * 4);
        p.dot.scale.setScalar(dotVisible ? pulse : 0);
        (p.dot.material as THREE.MeshBasicMaterial).opacity = dotVisible
          ? 1
          : 0;

        // Label: fade in then fade out
        if (t < RING_PHASE) {
          p.label.material.opacity = t / RING_PHASE;
        } else if (t < FADE_START) {
          p.label.material.opacity = 1;
        } else {
          p.label.material.opacity = 1 - (t - FADE_START) / (1.6 - FADE_START);
        }
      });

      // Scroll-based zoom toward northern hemisphere
      tSmooth += (scrollT - tSmooth) * 0.08;
      camera.position.set(0, tSmooth * 0.6, 5.8 - tSmooth * 2.3);
      camera.lookAt(0, tSmooth * 0.3, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    // Defer initial size-read until after the browser has finished layout
    requestAnimationFrame(onResize);
    const onScroll = () => {
      const heroEl = document.getElementById("hero");
      const heroH = heroEl ? heroEl.offsetHeight : window.innerHeight;
      scrollT = Math.max(0, Math.min(window.scrollY / heroH, 1));
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
      }}
    />
  );
}
