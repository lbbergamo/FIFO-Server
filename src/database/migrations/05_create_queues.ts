/* eslint-disable no-unused-vars */
import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('queues', table => {
    table.increments('id').primary()
    table.integer('localization_id').references('id')
      .inTable('localization').notNullable().unsigned()
    table.integer('service_id').references('id')
      .inTable('service').notNullable().unsigned()
    table.integer('users_id').references('id')
      .inTable('user').notNullable().unsigned()
    table.date('entry_queue').notNullable()
    table.date('entry_service')
    table.string('status').notNullable().defaultTo('pending')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('queues')
}
