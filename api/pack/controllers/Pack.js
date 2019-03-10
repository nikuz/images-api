'use strict';

/**
 * Pack.js controller
 *
 * @description: A set of functions called "actions" for managing `Pack`.
 */

module.exports = {

  /**
   * Retrieve pack records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pack.search(ctx.query);
    } else {
      return strapi.services.pack.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pack record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pack.fetch(ctx.params);
  },

  /**
   * Count pack records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pack.count(ctx.query);
  },

  /**
   * Create a/an pack record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pack.add(ctx.request.body);
  },

  /**
   * Update a/an pack record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pack.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pack record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pack.remove(ctx.params);
  }
};
