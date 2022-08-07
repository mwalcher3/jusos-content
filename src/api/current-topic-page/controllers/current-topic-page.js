'use strict';

/**
 *  current-topic-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::current-topic-page.current-topic-page');

module.exports = createCoreController('api::current-topic-page.current-topic-page', ({strapi}) =>({
    async findSlug(ctx) {
      // some logic here
  
      const { data, meta } = await super.find(ctx);
      // some more logic

      const slug= data.attributes.slug
      console.log("this is the slug!!!! :)", slug)

  
      return { slug, meta };
    }
  
  }));
  
