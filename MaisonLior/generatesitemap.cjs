const fs = require("fs");
const couples = require("./src/data/couples.json");
const journals = require("./src/data/journals.json");




const baseUrl = "https://maison-lior.vercel.app";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/journal",
  "/contact",
];

const portfolioRoutes = couples.map(
  (item) => `/portfolio/${item.slug}`
);

const journalRoutes = journals.map(
  (item) => `/journal/${item.url}`
);

const routes = [
  ...staticRoutes,
  ...portfolioRoutes,
  ...journalRoutes,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);