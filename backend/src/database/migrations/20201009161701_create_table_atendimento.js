
exports.up = knex => knex.schema.createTable('atendimento', table =>{
    table.increments('id');
    table.date('dtatendimento').notNullable();
    table.integer('canal').notNullable();
    table.integer('qtde').notNullable();
    table.integer('fkagente').unsigned();

    table.foreign('fkagente').references('agente.id')
})

exports.down = knex => knex.schema.dropTable('atendimento')
