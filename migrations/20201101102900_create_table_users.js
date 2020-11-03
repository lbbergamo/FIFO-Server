exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('last_socket_id')
        table.integer('localization_id').references('id')
            .inTable('localizations').unsigned()
        table.string('cover', 1000)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
