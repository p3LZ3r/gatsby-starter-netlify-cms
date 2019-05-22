module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Torsten Linnecke - Product Designer', // Navigation and Site Title
  titleAlt: 'Torsten Linnecke', // Title for JSONLD
  description: 'Im a Magdeburg based Product Designer crafting soft- and hardware.',
  headline: 'Torsten Linnecke - Product Designer', // Headline for schema.org JSONLD
  url: 'https://torsten-linnecke.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Portfolio', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Torsten Linnecke', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@p3lz3r',
  facebook:  'facebook.com/p3LZ3r',
  googleAnalyticsID: 'UA-20951614-18',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
