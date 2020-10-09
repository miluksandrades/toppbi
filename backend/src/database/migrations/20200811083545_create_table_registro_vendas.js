exports.up = knex => knex.schema.createTable('registro_vendas', table =>{
    table.increments('id');
    table.date('dtvenda').notNullable();
    table.float('valor').notNullable();
    table.integer('qtde').notNullable();
    table.integer('fkvendedor').unsigned();
    table.integer('fkplano').unsigned();
    table.integer('fkmunicipio').unsigned();
    table.foreign('fkvendedor').references('vendedor.id');
    table.foreign('fkplano').references('planos.id');
    table.foreign('fkmunicipio').references('municipio.id');
})

exports.down = knex => knex.schema.dropTable('registro_vendas');