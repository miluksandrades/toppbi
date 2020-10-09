
exports.up = knex => knex.schema.createTable('tiporegistro', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
})

exports.down = knex => knex.schema.dropTable('tiporegistro');
