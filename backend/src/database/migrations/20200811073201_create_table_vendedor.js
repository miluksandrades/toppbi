
exports.up = knex => knex.schema.createTable('vendedor', table =>{
    table.increments('id');
    table.string('nome').notNullable();
    table.integer('fkmunicipio').unsigned();

    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.dropTable('vendedor');
