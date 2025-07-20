const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

/**
 * For a single-page app using hash routes (#), all routes point to the same page.
 * Therefore, only the root path '/' should be included in the sitemap.
 */
const paths = ['/'];

// Your website's domain
const sitemapStream = new SitemapStream({ hostname: 'https://plavo.in' });

// The destination file
const pipeline = sitemapStream.pipe(createWriteStream('./public/sitemap.xml'));

// Add each path to the sitemap
paths.forEach(path => {
  sitemapStream.write({ url: path, changefreq: 'daily', priority: 1.0 });
});

// Finalize the sitemap
sitemapStream.end();

streamToPromise(pipeline).then(() => console.log('✅ Sitemap created successfully!'));