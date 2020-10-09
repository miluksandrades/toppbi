
exports.up = knex => knex.schema.createTable('metragem', table =>{
    table.increments('id');
    table.decimal('kmrodados');
    table.decimal('custos');
    table.decimal('totallitros');
    table.decimal('custoporkm');
    table.decimal('kmporlitro');
    table.date('mesreferente');
    table.integer('fkcarro').unsigned();

    table.foreign('fkcarro').references('carros.id');
})

exports.down = knex => knex.schema.dropTable('metragem')
