
exports.up = knex => knex.schema.createTable('carros', table =>{
    table.increments('id');
    table.string('marca').notNullable();
    table.string('modelo').notNullable();
    table.integer('anomodelo').notNullable();
    table.string('placa').notNullable();
    table.string('chassi')
    table.integer('fkequipe').unsigned();
    table.integer('fkmunicipio').unsigned();

    table.foreign('fkmunicipio').references('municipio.id');
    table.foreign('fkequipe').references('equipes');
})

exports.down = knex => knex.schema.dropTable('carros');
