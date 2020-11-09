"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

async function up(knex) {
  return knex.schema.createTable('queues', table => {
    table.increments('id').primary();
    table.integer('localization_id').references('id').inTable('localization').notNullable().unsigned();
    table.integer('service_id').references('id').inTable('service').notNullable().unsigned().onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('users_id').references('id').inTable('user').notNullable().unsigned().onUpdate('CASCADE').onDelete('CASCADE');
    table.timestamp('entry_queue').notNullable().defaultTo(knex.fn.now());
    table.date('entry_service');
    table.string('status').notNullable().defaultTo('pending');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

async function down(knex) {
  return knex.schema.dropTable('queues');
}