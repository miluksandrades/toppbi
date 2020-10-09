
exports.up = knex => knex.schema.createTable('equipe', table =>{
    table.increments('id');
    table.string('responsavel').notNullable();
    table.string('auxiliar');
})

exports.down = knex => knex.schema.dropTable('equipe');
