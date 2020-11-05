import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('last_socket_id')
    table.integer('localization_id').unsigned()
    table.string('cover', 1000)

    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())

    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('user')
}
