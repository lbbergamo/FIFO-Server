exports.up = function (knex) {
    return knex.schema.createTable('category', table => {
        table.increments('id').primary()
        table.string('description')
        table.string('name').notNull()
        table.string('cover', 1000)
        table.string('notes')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('categories')
};
