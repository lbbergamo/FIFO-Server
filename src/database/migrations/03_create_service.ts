import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('service', table => {
    table.increments('id').primary()
    table.string('description')
    table.string('name').notNullable()
    table
      .integer('cover')
      .references('id')
      .inTable('cover')
      .unsigned()

    table.string('notes')
    table.string('status')

    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())

    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('service')
}
