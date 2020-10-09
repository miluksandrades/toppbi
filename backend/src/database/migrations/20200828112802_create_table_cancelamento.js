
exports.up = knex => knex.schema.createTable('cancelamento', table =>{
    table.increments('id');
    table.date('dtcancelamento')
    table.integer('qtde')
    table.integer('fkmunicipio');
    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.dropTable('cancelamento');
