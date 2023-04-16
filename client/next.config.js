const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "ru"],
    defaultLocale: "en",
  },

  experimental: {
    largePageDataBytes: 160 * 100000,
  },
};

module.exports = nextConfig;
