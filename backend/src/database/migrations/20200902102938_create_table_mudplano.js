
exports.up = knex => knex.schema.createTable('mudplano', table =>{
    table.increments('id');
    table.integer('qtde').notNullable();
    table.date('dtmudplan', options={useTz: false}).notNullable();
    table.integer('fkmunicipio').unsigned();

    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.droptable('mudplano');
