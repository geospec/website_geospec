import React from "react";

export interface ServiceData {
  id: string;
  num: string;
  name: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  // Detail page fields
  overview: string;
  whatWeDeliver: { title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  tools: string[];
  outputs: string[];
}

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--sage)",
  strokeWidth: 2,
} as const;

export const SERVICES: ServiceData[] = [
  {
    id: "customer-mapping",
    num: "01",
    name: "Customer Mapping",
    tagline: "Know exactly where your market is.",
    desc: "Visualise your customer base geographically to identify demand hotspots, optimise territory allocation, and uncover market opportunities with precision spatial analytics.",
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    overview: `Understanding where your customers are is the foundation of every strategic decision — from where to open a new branch, to how to allocate your sales force, to which regions to prioritise for growth. Our Customer Mapping service transforms your CRM and transaction data into actionable geographic intelligence.\n\nWe don't just plot dots on a map. We layer your customer data against population density, infrastructure, competitor locations, and socioeconomic indicators to reveal patterns invisible in spreadsheets. The result is a living spatial picture of your market that drives smarter decisions at every level of your organisation.`,
    whatWeDeliver: [
      {
        title: "Customer Density Heatmaps",
        desc: "High-resolution visualisations showing where your customers cluster, thin out, and where untapped demand likely exists.",
      },
      {
        title: "Territory Optimisation",
        desc: "Data-driven redrawn territories that balance workload, revenue potential, and travel efficiency across your sales or service teams.",
      },
      {
        title: "Market Gap Analysis",
        desc: "Identification of geographic areas with high demand potential but low current penetration — your next growth frontier.",
      },
      {
        title: "Competitor Proximity Mapping",
        desc: "Spatial analysis of your footprint relative to competitors to inform positioning and expansion decisions.",
      },
      {
        title: "Route & Catchment Modelling",
        desc: "Optimised service routes and catchment area definitions based on real road networks and travel time data.",
      },
    ],
    useCases: [
      {
        title: "Retail Expansion",
        desc: "A Nairobi-based retail chain used our customer mapping to identify three underserved corridors along Thika Road, resulting in two new branches with above-average first-year revenue.",
      },
      {
        title: "FMCG Distribution",
        desc: "A consumer goods distributor redesigned their East Africa territory allocation, reducing average travel time per rep by 31% while increasing calls per day.",
      },
      {
        title: "Financial Services",
        desc: "A microfinance institution mapped loan uptake against infrastructure access to identify rural markets overlooked by traditional credit scoring models.",
      },
    ],
    tools: [
      "QGIS",
      "ArcGIS Pro",
      "Google Earth Engine",
      "Python (GeoPandas)",
      "Mapbox GL",
      "OpenRouteService",
    ],
    outputs: [
      "Interactive web dashboard",
      "PDF map atlas",
      "GeoJSON / Shapefile deliverables",
      "PowerPoint-ready map exports",
      "Raw data tables with spatial attributes",
    ],
  },

  {
    id: "land-evaluation",
    num: "02",
    name: "Land Evaluation",
    tagline: "Understand the ground before you commit to it.",
    desc: "Comprehensive land suitability assessment integrating soil composition, topography, hydrology, and cadastral data to support investment, agriculture, and urban planning decisions.",
    icon: (
      <svg {...iconProps}>
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
    overview: `Land is Africa's most consequential asset — and decisions made without proper spatial due diligence carry enormous risk. Whether you're evaluating a parcel for agriculture, infrastructure, conservation, or investment, our Land Evaluation service delivers the multi-layered analysis needed to make confident, defensible decisions.\n\nWe integrate satellite-derived terrain data, soil surveys, hydrological models, cadastral records, and land-use history into a unified suitability framework tailored to your specific use case. Every evaluation is grounded in current, high-resolution earth observation data — not outdated maps.`,
    whatWeDeliver: [
      {
        title: "Suitability Scoring",
        desc: "Multi-criteria weighted suitability models that rank land parcels against your specific requirements — crop type, infrastructure, flood risk, slope, and more.",
      },
      {
        title: "Soil & Terrain Analysis",
        desc: "Integration of soil texture, drainage class, organic matter proxies, and slope/aspect from DEM data to characterise land capability.",
      },
      {
        title: "Hydrological Assessment",
        desc: "Watershed delineation, flood zone mapping, seasonal water availability, and drainage network analysis.",
      },
      {
        title: "Cadastral & Legal Overlay",
        desc: "Alignment of physical suitability findings with official cadastral boundaries, land registry data, and encumbrance checks.",
      },
      {
        title: "Change Detection",
        desc: "Multi-temporal satellite imagery analysis to reveal how land cover and use have changed over 5–20 year periods.",
      },
    ],
    useCases: [
      {
        title: "Agricultural Investment",
        desc: "A private equity firm evaluating a 12,000-hectare holding in Laikipia received a full suitability report covering irrigated horticulture, dryland cereals, and livestock potential — with risk-ranked zones across the entire parcel.",
      },
      {
        title: "Infrastructure Corridor",
        desc: "Pre-feasibility land evaluation for a proposed solar farm corridor in Kajiado, identifying optimal placement avoiding flood plains, rocky outcrops, and existing community land.",
      },
      {
        title: "County Land Audit",
        desc: "A county government engaged us to evaluate 200,000 hectares of government land for potential allocation, identifying high-value agricultural land previously classified as unused.",
      },
    ],
    tools: [
      "QGIS",
      "ArcGIS Pro",
      "SNAP Toolbox",
      "Google Earth Engine",
      "SRTM / ALOS DEM",
      "SoilGrids",
      "CHIRPS rainfall data",
    ],
    outputs: [
      "Suitability map series (PDF + GIS)",
      "Parcel-level scoring table",
      "Executive summary report",
      "GeoTIFF raster deliverables",
      "Field verification protocol",
    ],
  },

  {
    id: "environmental-monitoring",
    num: "03",
    name: "Environmental Monitoring",
    tagline: "Track what's changing before it's too late.",
    desc: "Real-time and temporal tracking of vegetation cover, deforestation, water bodies, and climate indicators using multi-spectral and SAR satellite data.",
    icon: (
      <svg {...iconProps}>
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
        <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
        <path d="M2 16h.01" />
        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
        <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
      </svg>
    ),
    overview: `The African environment is changing faster than traditional monitoring systems can track. Deforestation, lake recession, land degradation, and shifting rainfall patterns are playing out at scales that only satellite observation can reliably capture. Our Environmental Monitoring service gives organisations the tools to see change as it happens — and respond before it becomes irreversible.\n\nWe build monitoring systems using the full spectrum of earth observation data — optical, SAR, thermal, and hyperspectral — combined with ground truth and automated change detection algorithms. Whether you need a one-off baseline assessment or a continuous alert system, we design the solution around your operational reality.`,
    whatWeDeliver: [
      {
        title: "Vegetation & NDVI Monitoring",
        desc: "Temporal NDVI, EVI, and SAVI time-series revealing seasonal patterns, drought stress, and long-term degradation trends across your area of interest.",
      },
      {
        title: "Deforestation & Land Cover Change",
        desc: "Automated detection of forest loss, bush clearance, and land-use conversion using Sentinel-2 and Landsat time-series with change magnitude classification.",
      },
      {
        title: "Water Body Dynamics",
        desc: "Tracking of lake levels, seasonal wetland extent, reservoir storage, and riverine flood zones using optical and SAR fusion.",
      },
      {
        title: "Carbon Stock Estimation",
        desc: "Above-ground biomass proxies derived from SAR backscatter and optical indices for carbon accounting and REDD+ reporting.",
      },
      {
        title: "Automated Alert Systems",
        desc: "Near-real-time deforestation or encroachment alerts delivered via dashboard, email, or API when thresholds are breached.",
      },
    ],
    useCases: [
      {
        title: "Forest Reserve Monitoring",
        desc: "Continuous monitoring of a 45,000-hectare gazetted forest in Mt Kenya region, with monthly encroachment reports delivered to the Kenya Forest Service.",
      },
      {
        title: "NGO Impact Reporting",
        desc: "A reforestation NGO used our before/after vegetation monitoring to quantify canopy recovery across 8,000 hectares for donor impact reporting.",
      },
      {
        title: "Lake Basin Tracking",
        desc: "Multi-year monitoring of Lake Baringos shoreline recession and sediment load to support a watershed management intervention programme.",
      },
    ],
    tools: [
      "Google Earth Engine",
      "SNAP Toolbox",
      "Sentinel-2",
      "Landsat 8/9",
      "Sentinel-1 SAR",
      "MODIS",
      "CHIRPS",
      "SMAP",
    ],
    outputs: [
      "Change detection map series",
      "Time-series charts (NDVI, water extent)",
      "Automated alert dashboard",
      "Annual monitoring report",
      "GeoTIFF archives",
    ],
  },

  {
    id: "resource-mapping",
    num: "04",
    name: "Resource Mapping",
    tagline: "Find what the land holds.",
    desc: "Geospatial delineation of natural resources including minerals, water, forests, and agricultural zones to support strategic planning and sustainable extraction.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.93 4.93 2.12 2.12" />
        <path d="m16.95 16.95 2.12 2.12" />
        <path d="m4.93 19.07 2.12-2.12" />
        <path d="m16.95 7.05 2.12-2.12" />
      </svg>
    ),
    overview: `Africa's resource wealth is both its greatest opportunity and its most complex challenge. Identifying, quantifying, and spatially characterising natural resources — from groundwater to forest stock to mineral-bearing geology — requires integrating multiple data streams that few organisations have the capacity to handle in-house.\n\nOur Resource Mapping service applies remote sensing, geophysical data analysis, and field-calibrated models to produce spatially explicit resource inventories. We work across sectors: water resources, forestry, agriculture, and minerals — always delivering outputs that are immediately usable by decision-makers, planners, and investors.`,
    whatWeDeliver: [
      {
        title: "Groundwater Potential Mapping",
        desc: "Integration of lineament analysis, lithology, slope, drainage density, and soil data to produce groundwater potential zone maps for borehole siting.",
      },
      {
        title: "Forest Stock Assessment",
        desc: "Above-ground biomass estimation and timber volume proxies derived from SAR, LiDAR where available, and optical canopy analysis.",
      },
      {
        title: "Agricultural Resource Zones",
        desc: "Delineation of irrigable land, rainfed cultivation zones, and agropastoral boundary areas based on soil, water, and climate data.",
      },
      {
        title: "Mineral Prospectivity Mapping",
        desc: "Remote sensing-based geological mapping using spectral band ratios, principal component analysis, and lineament extraction to identify prospective zones.",
      },
      {
        title: "Resource Inventory Reporting",
        desc: "Quantified spatial inventories with area calculations, confidence zones, and recommended field verification priorities.",
      },
    ],
    useCases: [
      {
        title: "County Water Programme",
        desc: "Groundwater potential mapping across Turkana County to prioritise borehole drilling under a county water access programme — reducing dry-hole risk by an estimated 60%.",
      },
      {
        title: "Timber Concession Assessment",
        desc: "Forest stock estimation across a 20,000-hectare concession area in West Africa to support sustainable harvest planning and FSC certification preparation.",
      },
      {
        title: "Mining Prospectivity",
        desc: "Satellite-based geological mapping for a junior explorer evaluating a licence block in Tanzania, identifying four high-priority target zones ahead of ground truthing.",
      },
    ],
    tools: [
      "ENVI",
      "ERDAS Imagine",
      "Google Earth Engine",
      "Sentinel-2",
      "ALOS PALSAR",
      "SRTM DEM",
      "Python (Rasterio, NumPy)",
    ],
    outputs: [
      "Resource potential zone maps",
      "Quantified inventory tables",
      "Priority target report",
      "GIS-ready shapefiles",
      "Field verification guidelines",
    ],
  },

  {
    id: "spatial-planning",
    num: "05",
    name: "Spatial Planning",
    tagline: "Build the right thing in the right place.",
    desc: "Evidence-based urban and regional planning support using zoning analysis, infrastructure modelling, population distribution mapping, and land-use change detection.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    overview: `Africa's cities are growing faster than any on earth. Without rigorous spatial planning, that growth creates sprawl, infrastructure deficits, environmental degradation, and inequity. Our Spatial Planning service provides the geospatial foundation that planners, county governments, and development organisations need to guide growth deliberately.\n\nWe produce the maps, models, and analysis that underpin Integrated Development Plans, Urban Structure Plans, Environmental Impact Assessments, and infrastructure master plans. Every deliverable is grounded in current satellite-derived data, ensuring plans reflect reality rather than outdated surveys.`,
    whatWeDeliver: [
      {
        title: "Land Use / Land Cover Mapping",
        desc: "Current LULC classification at the scale required for your planning framework — from sub-county to regional — with change detection against historical baselines.",
      },
      {
        title: "Population Distribution Modelling",
        desc: "Spatially disaggregated population estimates combining census data, building footprint extraction, and dasymetric mapping techniques.",
      },
      {
        title: "Infrastructure Gap Analysis",
        desc: "Accessibility modelling for schools, health facilities, water points, and roads — identifying underserved populations with spatial precision.",
      },
      {
        title: "Zoning & Suitability Frameworks",
        desc: "Development suitability surfaces for residential, commercial, industrial, and conservation zones based on physical and policy constraints.",
      },
      {
        title: "Growth Scenario Modelling",
        desc: "Spatial simulation of urban growth under alternative planning scenarios to support long-range structure planning.",
      },
    ],
    useCases: [
      {
        title: "County Integrated Plan",
        desc: "Geospatial data production and analysis for a county Integrated Development Plan covering 3,500km², including LULC, infrastructure mapping, and population distribution.",
      },
      {
        title: "Urban Growth Study",
        desc: "Ten-year urban expansion analysis for a peri-urban corridor using Sentinel-2 time-series, identifying 1,200 hectares of unplanned settlement growth for targeted upgrading.",
      },
      {
        title: "EIA Baseline Mapping",
        desc: "Environmental and social baseline mapping for a proposed industrial park development, covering sensitive habitats, community land, and infrastructure access.",
      },
    ],
    tools: [
      "ArcGIS Pro",
      "QGIS",
      "Google Earth Engine",
      "CityEngine",
      "WorldPop",
      "OpenStreetMap",
      "Sentinel-2",
    ],
    outputs: [
      "LULC map series",
      "Population surface rasters",
      "Infrastructure access maps",
      "Zoning suitability maps",
      "Planning report GIS annexes",
    ],
  },

  {
    id: "satellite-data",
    num: "06",
    name: "High-Res Satellite Data",
    tagline: "The sharpest view from above.",
    desc: "Access to sub-meter resolution satellite imagery from leading providers. We supply tasked, archival, and time-series imagery with rapid turnaround and processing pipelines.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
        <rect x="9" y="11" width="13" height="10" rx="2" />
        <path d="M16 11V7" />
      </svg>
    ),
    overview: `Not all satellite imagery is equal — and knowing which sensor, resolution, and acquisition parameters your project actually needs is the difference between data that answers your question and data that costs money but adds nothing. We act as your procurement and processing partner, sourcing imagery from the world's leading satellite operators and delivering it in the format your workflow requires.\n\nWe hold relationships with major imagery providers and can task satellites for new acquisition, access archival libraries going back decades, or set up automated time-series collection over your area of interest. All imagery is delivered radiometrically corrected, atmospherically processed, and orthorectified to your coordinate system.`,
    whatWeDeliver: [
      {
        title: "Tasked New Acquisition",
        desc: "We task commercial satellites (WorldView, Pléiades, SPOT) to acquire fresh imagery over your AOI at your specified window — with cloud cover guarantees where available.",
      },
      {
        title: "Archival Imagery Supply",
        desc: "Access to deep archives from Maxar, Airbus, Planet, and open sensors — often same-day delivery for historical scenes.",
      },
      {
        title: "Time-Series Packages",
        desc: "Regular automated delivery of imagery over a fixed AOI for monitoring applications — weekly, monthly, or triggered by events.",
      },
      {
        title: "Radiometric & Atmospheric Processing",
        desc: "Top-of-atmosphere to surface reflectance conversion, atmospheric correction (6S, ACOLITE, Sen2Cor), and BRDF normalisation.",
      },
      {
        title: "Orthorectification & Mosaicking",
        desc: "Precision geometric correction against ground control and seamless mosaicking of multi-scene acquisitions.",
      },
    ],
    useCases: [
      {
        title: "Construction Monitoring",
        desc: "Monthly WorldView-3 tasking over a major infrastructure project site for progress monitoring and volume estimation by the clients engineering team.",
      },
      {
        title: "Crop Area Estimation",
        desc: "Multi-temporal Sentinel-2 time-series delivered as analysis-ready data cubes for a food security programme covering three counties.",
      },
      {
        title: "Post-Disaster Assessment",
        desc: "Emergency archival imagery procurement and rapid processing within 6 hours of a client request following flooding in a monitored area.",
      },
    ],
    tools: [
      "Maxar WorldView-3/2",
      "Airbus Pléiades/SPOT-7",
      "Planet Labs",
      "Sentinel-2",
      "Landsat 8/9",
      "Sen2Cor",
      "ACOLITE",
      "GDAL",
    ],
    outputs: [
      "GeoTIFF (Cloud Optimised)",
      "JPEG2000",
      "Analysis-Ready Data cubes",
      "STAC-compliant metadata",
      "Custom format on request",
    ],
  },

  {
    id: "analysis-ready-data",
    num: "07",
    name: "Analysis Ready Data",
    tagline: "Data your pipeline can use immediately.",
    desc: "Pre-processed, radiometrically corrected, and atmospherically calibrated datasets ready for immediate analytical workflows — saving time and reducing pipeline complexity.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    overview: `The gap between raw satellite data and a result your team can act on is wider than most organisations expect. Radiometric calibration, atmospheric correction, cloud masking, geometric alignment, and format standardisation are non-trivial steps that consume significant time and specialist expertise. Our Analysis Ready Data service removes that burden entirely.\n\nWe deliver data conformant to CEOS ARD standards — meaning every product is consistently processed, properly documented, and immediately ingestible by your analytical tools. Whether you're running machine learning pipelines, feeding a GIS platform, or populating a monitoring dashboard, our ARD products slot in without preprocessing overhead.`,
    whatWeDeliver: [
      {
        title: "Surface Reflectance Products",
        desc: "Atmospherically corrected, BRDF-normalised surface reflectance for Sentinel-2, Landsat, and commercial sensors — consistent across dates and scenes.",
      },
      {
        title: "Cloud & Shadow Masks",
        desc: "Per-pixel quality flags for cloud, cloud shadow, saturated pixels, and snow using state-of-the-art masking algorithms (s2cloudless, Fmask).",
      },
      {
        title: "Spectral Index Stacks",
        desc: "Pre-computed NDVI, EVI, NDWI, NDBI, NBR, SAVI, and custom indices delivered as multi-band GeoTIFF stacks.",
      },
      {
        title: "Data Cubes",
        desc: "Spatiotemporally organised data cubes aligned to a common grid, ready for time-series analysis and ML feature extraction.",
      },
      {
        title: "STAC Catalogues",
        desc: "SpatioTemporal Asset Catalog metadata for your dataset, enabling programmatic discovery and access via standard APIs.",
      },
    ],
    useCases: [
      {
        title: "ML Training Data",
        desc: "ARD time-series stacks delivered to a crop type classification team, reducing their preprocessing pipeline from 3 weeks to same-day ingest.",
      },
      {
        title: "Change Detection Platform",
        desc: "Monthly ARD updates feeding an automated change detection platform for a conservation organisation monitoring 12 protected areas.",
      },
      {
        title: "Research Programme",
        desc: "Multi-year Sentinel-2 ARD cube covering the Lake Victoria basin delivered to a university research programme studying water quality dynamics.",
      },
    ],
    tools: [
      "Sen2Cor",
      "ACOLITE",
      "LaSRC",
      "Fmask",
      "s2cloudless",
      "GDAL / COG",
      "Python (Rasterio)",
      "STAC tools",
    ],
    outputs: [
      "Cloud Optimised GeoTIFF (COG)",
      "STAC catalogue JSON",
      "Quality flag layers",
      "Spectral index stacks",
      "Processing metadata report",
    ],
  },

  {
    id: "geoint",
    num: "08",
    name: "GEOINT",
    tagline: "Intelligence grounded in geography.",
    desc: "Geospatial intelligence solutions for defence, security, and strategic operations — integrating imagery, signals, and human-geography data into actionable intelligence products.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    overview: `Geospatial Intelligence — the integration of imagery, geographic data, and analytical tradecraft — is the discipline that answers the hardest operational questions: what is happening where, how is it changing, and what does it mean? Our GEOINT service brings rigorous all-source spatial analysis to defence, security, and strategic decision-making contexts.\n\nWe produce finished intelligence products, not just maps. Our analysts combine satellite imagery exploitation, open-source intelligence, human geography data, and pattern-of-life analysis to deliver assessments that inform decisions at the operational and strategic level. All work is conducted under appropriate data governance frameworks and client security requirements.`,
    whatWeDeliver: [
      {
        title: "Imagery Intelligence (IMINT)",
        desc: "Systematic exploitation of satellite and aerial imagery to characterise facilities, infrastructure, activity patterns, and changes of interest.",
      },
      {
        title: "Change Detection & Monitoring",
        desc: "Regular monitoring of designated areas of interest with automated and analyst-verified change alerts at specified revisit frequencies.",
      },
      {
        title: "Human Geography Analysis",
        desc: "Spatial analysis of population distribution, movement patterns, ethnic/cultural geographies, and infrastructure access relevant to operational environments.",
      },
      {
        title: "Terrain & Route Analysis",
        desc: "Detailed trafficability assessment, line-of-sight analysis, cross-country movement modelling, and key terrain identification.",
      },
      {
        title: "Finished Intelligence Products",
        desc: "Analyst-produced assessments, map-based briefing products, and annotated imagery reports formatted to client specifications.",
      },
    ],
    useCases: [
      {
        title: "Border Monitoring",
        desc: "Persistent monitoring of a 400km border corridor with weekly change detection reports and anomaly alerts for a government security agency.",
      },
      {
        title: "Infrastructure Assessment",
        desc: "Damage assessment and reconstruction tracking for critical infrastructure across a conflict-affected area using multi-temporal commercial imagery.",
      },
      {
        title: "Operational Planning Support",
        desc: "Terrain analysis and key infrastructure mapping to support operational planning for a multilateral peacekeeping mission.",
      },
    ],
    tools: [
      "Maxar WorldView",
      "Planet Tasking",
      "ENVI",
      "ArcGIS Pro",
      "Esri Defence Mapping",
      "OpenStreetMap",
      "OSINT frameworks",
    ],
    outputs: [
      "Annotated imagery products",
      "Change detection reports",
      "Terrain analysis maps",
      "Briefing-ready PDF products",
      "GIS packages",
    ],
  },
];
