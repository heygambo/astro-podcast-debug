function generateShowJSONPlugin() {
  let ref1;
  return {
    name: 'generate-show-json',
    buildStart() {
      console.log('build start')
      ref1 = this.emitFile({
        type: 'chunk',
        id: 'src/entry1'
      });
    },
    generateBundle() {
      console.log('generate bundle')
      this.emitFile({
        type: 'asset',
        fileName: 'test.html',
        source: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Title</title>
        </head>
        <body>
          <script src="${this.getFileName(ref1)}" type="module"></script>
        </body>
        </html>`
      });
    }
  };
}

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: 'https://astro-minimal-starter.netlify.app/',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,      // Generate sitemap (set to "false" to disable)
  },
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: [
    // '@astrojs/renderer-preact',
    '@astrojs/renderer-vue'
  ],
  // vite: {
  //   plugins: [generateShowJSONPlugin()]
  // }
});
