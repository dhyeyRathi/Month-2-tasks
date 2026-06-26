const fs = require("fs");
const couples = require("./src/data/couples.json");
const journals = require("./src/data/journals.json");

const baseUrl = "https://maisonlior-dhyey.vercel.app";

const staticRoutes = [
  { path: "", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/portfolio", priority: 0.9 },
  { path: "/journal", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
];

const portfolioRoutes = couples.map(
  (item) => `/portfolio/${item.slug}`
);

const journalRoutes = journals.map(
  (item) => `/journal/${item.url}`
);


const routes = [
  ...staticRoutes,
];

const indiJournal =[
  ...journalRoutes
];

const indiPortfolio =[
  ...portfolioRoutes
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

// JOURNAL SITEMAP



const JournalSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indiJournal
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("./public/journal/sitemap.xml", JournalSitemap);

// PORTFOLIO SITEMAP


const PortfolioSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indiPortfolio
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("./public/portfolio/sitemap.xml", PortfolioSitemap);