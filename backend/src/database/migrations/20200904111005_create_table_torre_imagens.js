
exports.up = knex => knex.schema.createTable('imagens', table =>{
    table.increments('id');
    table.string('url').notNullable();
    table.integer('fktorre').unsigned();

    table.foreign('fktorre').references('torres.id');
})

exports.down = knex => knex.schema.dropTable('imagens');
