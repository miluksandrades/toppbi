exports.up = (knex) => knex.schema.createTable('usuario', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.text('username').unique().notNullable()
    table.text('password').notNullable();
    table.integer('fksetor').notNullable();

    table.foreign('fksetor').references('setor.id');
});

exports.down = knex => knex.schema.dropTable('usuario');