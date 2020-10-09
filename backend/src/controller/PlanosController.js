const knex = require('../connection');

module.exports = {
    async index(req, res) {
        const planos = await knex('planos')
        .select('planos.id', 'planos.descricao', 'planos.valor', 'municipio.descricao as municipio')
        .leftJoin('municipio', 'planos.fkmunicipio', 'municipio.id')
        .orderBy('descricao');

        return res.status(200).json(planos);
    },

    async getPlanosByMunicipio(req, res) {
        const {
            id
        } = req.params;

        const planos = await knex('planos').select('*')
            .where('fkmunicipio', '=', id);
        
        return res.status(200).json(planos);
    },

    async create(req, res) {
        const {
            descricao,
            valor,
            fkmunicipio
        } = req.body;

        await knex('planos').insert({
            descricao,
            valor,
            fkmunicipio
        });

        return res.status(200).json({
            msg: 'OK'
        })
    },

    async delete(req, res) {
        const {
            id
        } = req.params;

        await knex('planos').where('id', id).delete();

        res.status(200).json({
            msg: "Plano Deletado"
        });
    }
}