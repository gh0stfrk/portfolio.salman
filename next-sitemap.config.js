/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://salmansyyd.com',
  generateRobotsTxt: true, // (optional) Generate robots.txt file
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/admin'], // optional: pages to exclude
};
