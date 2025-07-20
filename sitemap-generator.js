const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const paths = ['/'];

const sitemapStream = new SitemapStream({ hostname: 'https://plavo.in' });
const pipeline = sitemapStream.pipe(createWriteStream('./public/sitemap.xml'));

paths.forEach(path => {
  sitemapStream.write({ url: path, changefreq: 'daily', priority: 1.0 });
});

sitemapStream.end();

// The fix is on this line: use sitemapStream instead of pipeline
streamToPromise(sitemapStream).then(() => console.log('✅ Sitemap created successfully!'));