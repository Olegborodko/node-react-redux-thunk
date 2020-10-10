exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.decimal('price')
    table.string('imgLink')
    table.string('body')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique('id')
    table.unique('title')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
