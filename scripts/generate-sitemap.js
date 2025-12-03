// This script generates a sitemap.xml file with all cities and neighborhoods
// Usage: node scripts/generate-sitemap.js

import fs from 'fs';
import { CITIES, NEIGHBORHOODS } from '../constants'; // Note: This might require babel-node or setting "type": "module" in package.json to run directly

const baseUrl = 'https://www.acquateccalhas.com.br';
const today = new Date().toISOString().split('T')[0];

const toUrl = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

CITIES.forEach(city => {
  sitemap += `  <url>
    <loc>${baseUrl}/cidade/${toUrl(city)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

NEIGHBORHOODS.forEach(hood => {
  sitemap += `  <url>
    <loc>${baseUrl}/bairro/${toUrl(hood)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemap += `</urlset>`;

console.log("Generated sitemap with " + (1 + CITIES.length + NEIGHBORHOODS.length) + " URLs.");
// In a real environment, you would write to file:
// fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log(sitemap);