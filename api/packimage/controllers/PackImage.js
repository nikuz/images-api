'use strict';

/**
 * PackImage.js controller
 *
 * @description: A set of functions called "actions" for managing `PackImage`.
 */

module.exports = {

  /**
   * Retrieve packImage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.packImage.search(ctx.query);
    } else {
      return strapi.services.packImage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a packImage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.packImage.fetch(ctx.params);
  },

  /**
   * Count packImage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.packImage.count(ctx.query);
  },

  /**
   * Create a/an packImage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.packImage.add(ctx.request.body);
  },

  /**
   * Update a/an packImage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.packImage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an packImage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.packImage.remove(ctx.params);
  }
};
