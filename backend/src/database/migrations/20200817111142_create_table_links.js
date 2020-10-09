
exports.up = knex => knex.schema.createTable('operadora', table =>{
    table.increments('id');
    table.string('descricao')
})

exports.down = knex => knex.schema.dropTable('operadora');
