const knex = require("../connection");

module.exports = {
    async index(req, res){
        const vendedores = await knex('vendedor')
        .select('vendedor.id', 'vendedor.nome', 'municipio.descricao as municipio')
        .leftJoin('municipio', 'vendedor.fkmunicipio', 'municipio.id')
        .orderBy('vendedor.fkmunicipio', 'asc');

        return res.status(200).json(vendedores);
    },

    async getVendedorByMunicipio(req, res) {
        const {
            id
        } = req.params;

        const vendedor = await knex('vendedor').select('*')
            .where('fkmunicipio', '=', id);
        
        return res.status(200).json(vendedor);
    },

    async create(req, res){
        const {nome, fkmunicipio} = req.body;

        await knex('vendedor').insert({
            nome,
            fkmunicipio
        });

        return res.status(200).json({msg: 'OK'});
    },

    async delete(req, res){
        const {id} = req.params;

        const vendedor = await knex('vendedor').where('id', id).delete();

        if(!vendedor){
            return res.status(400).json({msg: 'Não foi possível excluir'});
        }

        return res.status(200).json(vendedor);
    }
}