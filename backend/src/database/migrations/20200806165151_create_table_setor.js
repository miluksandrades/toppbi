
exports.up = knex => knex.schema.createTable('setor', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
});

exports.down = knex => knex.schema.dropTable('setor');
