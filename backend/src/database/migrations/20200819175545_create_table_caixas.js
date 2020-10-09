
exports.up = knex => knex.schema.createTable('caixa', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
})

exports.down = knex => knex.schema.dropTable('caixa');
