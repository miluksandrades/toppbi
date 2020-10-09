
exports.up = knex => knex.schema.createTable('mudendereco', table =>{
    table.increments('id');
    table.integer('qtde').notNullable();
    table.date('dtmudend', options={useTz: false}).notNullable();
    table.integer('fkmunicipio').unsigned();
    
    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.droptable('mudendereco');
