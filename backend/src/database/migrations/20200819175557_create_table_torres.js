
exports.up = knex => knex.schema.createTable('torres', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
    table.string('ip').notNullable();
    table.string('endereco').notNullable();
    table.string('bairro').notNullable();
    table.string('tipotorre').notNullable();
    table.string('obs');
    table.integer('fkmunicipio').unsigned();

    table.foreign('fkmunicipio').references('municipio.id')
})

exports.down = knex => knex.schema.dropTable('torres');
