/* eslint-disable no-unused-vars */
import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('localization_service', table => {
    table
      .increments('id')
      .primary()

    table
      .integer('localization_id')
      .references('id')
      .inTable('localization')
      .notNullable()
      .unsigned()

    table
      .integer('service_id')
      .references('id')
      .inTable('service')
      .notNullable()
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('localization_service')
}
