
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/current-topic-page/slug',
        handler: 'current-topic-page.findSlug',
      }
    ]
  }