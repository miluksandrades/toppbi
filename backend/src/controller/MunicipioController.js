const knex = require("../connection")

module.exports = {
    async index(req, res){
        const municipios = await knex.select('*').from('municipio');

        return res.status(200).json(municipios);
    }
}