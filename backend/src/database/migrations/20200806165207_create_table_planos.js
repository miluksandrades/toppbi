
exports.up = knex => knex.schema.createTable('planos', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
    table.float('valor').notNullable();
    table.integer('fkmunicipio').unsigned();

    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.dropTable('planos');
