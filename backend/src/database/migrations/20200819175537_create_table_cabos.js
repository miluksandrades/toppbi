
exports.up = kenx => knex.schema.createTable('cabos', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
})

exports.down = knex => knex.schema.dropTable('cabos')
