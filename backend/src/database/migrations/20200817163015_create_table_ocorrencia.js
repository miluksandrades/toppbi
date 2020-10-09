
exports.up = knex => knex.schema.createTable('ocorrencia', table =>{
    table.increments('id');
    table.datetime('dtinicio', options={useTz: false}).notNullable();
    table.datetime('dtnormal', options={useTz: false}).notNullable();
    table.string('motivo');
    table.integer('fkoperadora').unsigned();
    table.integer('fktiporeg').unsigned();

    table.foreign('fkoperadora').references('operadora.id');
    table.foreign('fktiporeg').references('tiporegistro.id');
})

exports.down = knex => knex.schema.dropTable('ocorrencia');
