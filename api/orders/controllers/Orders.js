'use strict';

/**
 * Orders.js controller
 *
 * @description: A set of functions called "actions" for managing `Orders`.
 */

module.exports = {

  /**
   * Retrieve orders records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.orders.search(ctx.query);
    } else {
      return strapi.services.orders.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a orders record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.orders.fetch(ctx.params);
  },

  /**
   * Count orders records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.orders.count(ctx.query);
  },

  /**
   * Create a/an orders record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const { logo } = ctx.request.body.files;
    const maxLogoSize = 1024 * 1000; // limit logo size to 100kb
    if (logo && logo.size > maxLogoSize) {
      return ctx.response.serverUnavailable(`max logo size is ${maxLogoSize / 1024}`);
    }

    const user = ctx.state.user;
    if (!user) {
      return ctx.response.serverUnavailable('not authorized');
    }

    const response = {
      ...ctx.request.body.fields,
      user: user._id,
      status: 'created',
    };

    if (logo && logo.path) {
      const uploadConfig = await strapi.store({
        environment: strapi.config.environment,
        type: 'plugin',
        name: 'upload'
      }).get({ key: 'provider' });

      const buffers = await strapi.plugins.upload.services.upload.bufferize(logo);
      const uploadedLogo = await strapi.plugins.upload.services.upload.upload(buffers, uploadConfig);
      if (!uploadedLogo || !uploadedLogo[0]) {
        return ctx.response.serverUnavailable('can\'t upload logo');
      }

      response.logo = uploadedLogo[0].url;
      response.logoFileId = uploadedLogo[0].id;
    }

    return strapi.services.orders.add(response);
  },

  /**
   * Update a/an orders record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.orders.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an orders record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.orders.remove(ctx.params);
  }
};
