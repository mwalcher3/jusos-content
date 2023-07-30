'use strict';

/**
 *  contact-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::contact-page.contact-page', ({strapi}) =>({
//   async find(ctx) {
//     // some logic here
//     if (ctx.request.url== '/api/contact-page?populate=*'){
//       ctx.request.url= "/api/contact-page?populate[form][populate][0]=inputs"
//     }

//     const { data, meta } = await super.find(ctx);
//     // some more logic

//     return { data, meta };
//   }

// }));

module.exports = createCoreController('api::contact-page.contact-page');
