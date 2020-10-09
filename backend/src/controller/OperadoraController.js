const knex = require("../connection")

module.exports = {
    async index(req, res){
        const operadora = await knex('operadora').select('*');

        return res.status(200).json(operadora);
    }
}