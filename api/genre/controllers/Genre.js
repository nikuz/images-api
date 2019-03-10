'use strict';

/**
 * Genre.js controller
 *
 * @description: A set of functions called "actions" for managing `Genre`.
 */

module.exports = {

  /**
   * Retrieve genre records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.genre.search(ctx.query);
    } else {
      return strapi.services.genre.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a genre record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.genre.fetch(ctx.params);
  },

  /**
   * Count genre records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.genre.count(ctx.query);
  },

  /**
   * Create a/an genre record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.genre.add(ctx.request.body);
  },

  /**
   * Update a/an genre record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.genre.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an genre record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.genre.remove(ctx.params);
  }
};
