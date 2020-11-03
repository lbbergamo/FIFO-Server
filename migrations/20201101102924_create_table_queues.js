exports.up = function (knex) {
    return knex.schema.createTable('queues', table => {
        table.increments('id').primary()
        table.integer('localization_id').references('id')
            .inTable('localizations').notNull().unsigned()
        table.integer('service_id').references('id')
            .inTable('services').notNull().unsigned()
        table.integer('users_id').references('id')
            .inTable('services').notNull().unsigned()
        table.datetime('entry_queue').notNull()
        table.datetime('entry_service')
        table.string('status').notNull().defaultTo("pending")
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('queues')
};
