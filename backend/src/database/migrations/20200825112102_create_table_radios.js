
exports.up = knex => knex.schema.createTable('radios', table =>{
    table.increments('id');
    table.string('descricao').notNullable();
    table.string('marca').notNullable();
    table.string('modelo').notNullable();
    table.string('antena');
    table.string('ip').notNullable();
    table.string('mac').notNullable();
    table.string('frequencia').notNullable();
    table.integer('numclientes')
    table.string('obs');
    table.integer('fktorre').unsigned();

    table.foreign('fktorre').references('torres.id')
})

exports.down = knex => knex.schema.dropTable('radios');
