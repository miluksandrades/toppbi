
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('planos').del()
    .then(function () {
      // Inserts seed entries
      return knex('planos').insert([
        {descricao: 'TOPP 20 MB', valor: 129.90}
      ]);
    });
};
