/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.turkiyedental.clinic",
  generateRobotsTxt: true,
  outDir: "public",
  changefreq: "weekly",
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : 0.8;

    return {
      loc: path,
      changefreq: "weekly",
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
