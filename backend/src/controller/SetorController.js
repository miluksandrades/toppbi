const knex = require("../connection");

module.exports = {
    async index(req, res){
        const setores = await knex('setor').select('*');

        return res.status(200).json(setores);
    },

    async create(req, res){
        const {descricao} = req.body;

        await knex('setor').insert({
            descricao
        });

        return res.status(200).json({msg: 'OK'});
    },

    async delete(req, res){
        const {id} = req.params;

        const setor = await knex('setor').where('id', id).delete();

        if(!setor){
            return res.status(400).json({msg: 'Não foi possivel excluir'});
        }

        return res.status(200).json(setor);
    }
}