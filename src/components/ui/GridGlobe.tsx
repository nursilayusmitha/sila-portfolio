"use client";
import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  // Panggil semua useMemo SEBELUM blok kondisional
  const darkMode = useMemo(() => resolvedTheme === 'dark', [resolvedTheme]);
  const globeConfig = useMemo(() => ({
  pointSize: 4,
  globeColor: darkMode ? "#062056" : "#0f8fff", // Warna biru yang diinginkan: #0f8fff
  showAtmosphere: true,
  atmosphereColor: darkMode ? "#a5b4fc" : "rgba(135, 206, 250, 0.4)", // Biru muda transparan
  atmosphereAltitude: 0.2,
  emissive: darkMode ? "#062056" : "#0f8fff", // Sama dengan globeColor
  emissiveIntensity: darkMode ? 0.1 : 0.7, // Lebih tinggi untuk lebih terang
  shininess: darkMode ? 0.9 : 0.88,
  polygonColor: darkMode 
    ? "rgba(255,255,255,0.7)" 
    : "rgba(31, 41, 55, 0.5)", // Gray 800 (#1f2937) dengan opacity 70%
  ambientLight: darkMode ? "#38bdf8" : "#d6eaff", // Biru sangat muda
  directionalLeftLight: darkMode ? "#ffffff" : "#ffffff", // Putih
  directionalTopLight: darkMode ? "#ffffff" : "#ffffff", // Putih
  pointLight: darkMode ? "#ffffff" : "#ffffff", // Putih
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
}), [darkMode]);

// Dots warna gelap (Gray 800)
const colors = useMemo(() => darkMode 
  ? ["#06b6d4", "#3b82f6", "#6366f1"] // Warna untuk dark mode
  : ["#1f2937", "#1f2937", "#1f2937"], // Gray 800 untuk semua dots di light mode
  [darkMode]
);

// Warna garis (arcs) warna-warni cerah non-biru
const arcColors = useMemo(() => darkMode 
  ? ["#06b6d4", "#3b82f6", "#6366f1"]
  : [
      "#FF5252", // Merah cerah
      "#4CAF50", // Hijau cerah
      "#FFD600", // Kuning cerah
      "#FF9800", // Oranye cerah
      "#9C27B0"  // Ungu cerah
    ],
  [darkMode]
);

  const sampleArcs = useMemo(() => [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: arcColors[Math.floor(Math.random() * (arcColors.length - 1))],
    },
  ], [arcColors]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full globe-container">
      <World 
        data={sampleArcs} 
        globeConfig={globeConfig} 
        key={darkMode ? "dark" : "light"}
      />
    </div>
  );
};

export default GridGlobe;