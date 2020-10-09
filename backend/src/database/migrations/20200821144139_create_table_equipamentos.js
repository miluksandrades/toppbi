
exports.up = knex => knex.schema.createTable('equipamentos', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
    table.string('marca').notNullable();
    table.string('qtde').notNullable();
    table.string('obs');
    table.integer('fktorre').unsigned();

    table.foreign('fktorre').references('torres.id')
})

exports.down = knex => knex.schema.dropTable('equipamentos')
