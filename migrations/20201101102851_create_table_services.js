
exports.up = function(knex) {
    return knex.schema.createTable('services', table => {
        table.increments('id').primary()
        table.string('description')
        table.string('name').notNull()
        table.string('cover',1000)
        table.string('notes')
        table.string('status')
        table.integer('category_id').references('id')
            .inTable('category').notNull().unsigned()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('queues')
};
