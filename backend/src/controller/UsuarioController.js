const Knex = require("knex")

const knex = require('../connection');

module.exports = {
    async index(req, res){
        const resultado = await knex('usuarios');

        return res.json(resultado);
    },

    
}