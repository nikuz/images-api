'use strict';

/**
 * Templates.js controller
 *
 * @description: A set of functions called "actions" for managing `Templates`.
 */

module.exports = {

  /**
   * Retrieve templates records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.templates.search(ctx.query);
    } else {
      return strapi.services.templates.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a templates record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.templates.fetch(ctx.params);
  },

  /**
   * Count templates records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.templates.count(ctx.query);
  },

  /**
   * Create a/an templates record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.templates.add(ctx.request.body);
  },

  /**
   * Update a/an templates record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.templates.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an templates record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.templates.remove(ctx.params);
  }
};
