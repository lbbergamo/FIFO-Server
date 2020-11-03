/* eslint-disable no-unused-vars */
import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('localization', table => {
    table.increments('id').primary()
    table.string('description').notNullable()
    table.string('name').notNullable()
    table.string('cover', 1000)
    table.string('notes')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('localization')
}
