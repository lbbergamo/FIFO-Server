
exports.up = function(knex) {
    return knex.schema.createTable('localization_service', table => {
        table.increments('id').primary()
        table.integer('localizations_id').references('id')
            .inTable('localizations').notNull().unsigned()
        table.integer('services_id').references('id')
            .inTable('services').notNull().unsigned()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('localization_service')
};
