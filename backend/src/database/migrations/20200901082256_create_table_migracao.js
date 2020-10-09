
exports.up = knex => knex.schema.createTable('migracao', table =>{
    table.increments('id');
    table.integer('qtde').notNullable();
    table.date('dtmigracao', options={useTz: false}).notNullable();
    table.integer('fkmunicipio').unsigned();

    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.dropTable('migracao');
