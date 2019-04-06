'use strict';

/**
 * Packsizes.js controller
 *
 * @description: A set of functions called "actions" for managing `Packsizes`.
 */

module.exports = {

  /**
   * Retrieve packsizes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.packsizes.search(ctx.query);
    } else {
      return strapi.services.packsizes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a packsizes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.packsizes.fetch(ctx.params);
  },

  /**
   * Count packsizes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.packsizes.count(ctx.query);
  },

  /**
   * Create a/an packsizes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.packsizes.add(ctx.request.body);
  },

  /**
   * Update a/an packsizes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.packsizes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an packsizes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.packsizes.remove(ctx.params);
  }
};
