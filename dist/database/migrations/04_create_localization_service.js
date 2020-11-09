"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

async function up(knex) {
  return knex.schema.createTable('localization_service', table => {
    table.increments('id').primary();
    table.integer('localization_id').references('id').inTable('localization').notNullable().unsigned();
    table.integer('service_id').references('id').inTable('service').notNullable().unsigned().onUpdate('CASCADE').onDelete('CASCADE');
  });
}

async function down(knex) {
  return knex.schema.dropTable('localization_service');
}