<template>
  <script type="application/ld+json" v-html="schema" />
</template>

<script>
import site from '../data/site.js';

export default {
  name: 'ArticleSchema',
  props: ['title', 'permalink', 'publishDate', 'ogImageUrl', 'description'],
  computed: {
    schema() {
      const ldData = {
        "@context": "https://schema.org",
        "@type": "Article",
        publisher: {
          "@type": "Organization",
          name: `${site.name} Blog`,
          url: `${site.url}/blog/`,
        },
        author: {
          "@type": "Person",
          name: `${site.name}`,
          image: {
            "@type": "ImageObject",
            url: `${site.url}/assets/img/favicon.png`,
            width: 512,
            height: 512,
          },
          url: "https://example.com/about/",
          sameAs: [
            `${site.url}`,
            `${site.facebookURL}`,
            `${site.twitterURL}`,
            `${site.instagramURL}`,
          ],
        },
        headline: `${this.title}`,
        url: `${this.permalink}`,
        datePublished: `${this.publishDate}`,
        image: {
          "@type": "ImageObject",
          url: `${site.url}${this.ogImageUrl}`,
          width: 3600,
          height: 1890,
        },
        description: `${this.description}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${site.url}/blog/`,
        },
      };
      return JSON.stringify(ldData, null, 2)
    },
  },
};
</script>
