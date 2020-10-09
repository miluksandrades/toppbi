
exports.up = knex => knex.schema.createTable('retencao', table =>{
    table.increments('id');
    table.integer('qtde');
    table.date('dtretencao');
    table.integer('fkmunicipio').unsigned();

    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.dropTable('retencao');
