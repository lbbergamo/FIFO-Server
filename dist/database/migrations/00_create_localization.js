"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

async function up(knex) {
  return knex.schema.createTable('localization', table => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.string('name').notNullable();
    table.string('cover', 1000);
    table.string('notes');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

async function down(knex) {
  return knex.schema.dropTable('localization');
}