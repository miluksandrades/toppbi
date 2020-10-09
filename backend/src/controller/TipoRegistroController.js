const knex = require("../connection")

module.exports ={
    async index(req, res){
        const tipo = await knex.select('*').from('tiporegistro');

        return res.status(200).json(tipo);
    }
}