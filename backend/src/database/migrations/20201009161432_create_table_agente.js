
exports.up = knex => knex.schema.createTable('agente', table =>{
    table.increments('id');
    table.string('atendente')
})

exports.down = knex => knex.schema.dropTable('agente')
