
exports.up = knex => knex.schema.createTable('municipio', table => {
    table.increments('id');
    table.string('descricao').notNullable();
})

exports.down = knex => knex.schema.dropTable('municipio');
