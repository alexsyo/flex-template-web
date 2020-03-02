const path = require('path');
const moment = require('moment');

const buildPath = path.resolve(__dirname, '..', 'build');
const PORT = parseInt(process.env.PORT, 10);
const USING_SSL = process.env.REACT_APP_SHARETRIBE_USING_SSL === 'true';

/**
 * Resolves domain and port information from
 * a URL, for example:
 * https://example.com:8080 => example.com:8080
 */
const domainAndPort = rootURL => {
  if (rootURL.indexOf('//') === -1) {
    return rootURL;
  } else {
    return rootURL.split('//')[1];
  }
};

/**
 * Resolves the domain from a URL, for example:
 * https://example.com:8080 => example.com
 */
const domain = rootURL => {
  if (!rootURL) {
    return 'INVALID_URL';
  }

  return domainAndPort(rootURL).split(':')[0];
};

/**
 * Resolves the port number from a URL. If the port
 * can not be found `undefined` will be returned.
 */
const port = rootURL => {
  if (!rootURL) {
    return 'INVALID_URL';
  }

  return domainAndPort(rootURL).split(':')[1];
};

/**
 * Return a structure for sitemap.xml and robots.txt to be used by the
 * express-sitemap library. Uses the canonical URL value from env
 * config for domain and port information.
 */
exports.sitemapStructure = () => {
  const now = moment().format('YYYY-MM-DD');

  return {
    url: domain(process.env.REACT_APP_CANONICAL_ROOT_URL),
    http: USING_SSL ? 'https' : 'http',
    port: port(process.env.REACT_APP_CANONICAL_ROOT_URL),
    sitemap: path.join(buildPath, 'static', 'sitemap.xml'),
    robots: path.join(buildPath, 'robots.txt'),
    sitemapSubmission: '/static/sitemap.xml',
    map: {
      '/': ['get'],
      '/signup': ['get'],
      '/login': ['get'],
      '/host': ['get'],
      '/how': ['get'],
      '/s?address=Amsterdam%2C%20North%20Holland%2C%20Netherlands&bounds=52.51762811%2C5.12390605%2C52.19380373%2C4.61517488': [
        'get',
      ],
      '/account': ['get'],
      '/reset-password': ['get'],
      '/verify-email': ['get'],
    },
    route: {
      '/': {
        lastmod: now,
        changefreq: 'always',
        priority: 1.0,
      },
      '/signup': {
        lastmod: now,
        changefreq: 'always',
        priority: 1.0,
      },
      '/login': {
        lastmod: now,
        changefreq: 'always',
        priority: 1.0,
      },
      '/host': {
        lastmod: now,
        changefreq: 'always',
        priority: 1.0,
      },
      '/how': {
        lastmod: now,
        changefreq: 'always',
        priority: 1.0,
      },
      '/s?address=Amsterdam%2C%20North%20Holland%2C%20Netherlands%26bounds=52.51762811%2C5.12390605%2C52.19380373%2C4.61517488': {
        changefreq: 'always',
        priority: 1.0,
      },
      '/account': {
        disallow: true,
      },
      '/reset-password': {
        disallow: true,
      },
      '/verify-email': {
        disallow: true,
      },
    },
  };
};
