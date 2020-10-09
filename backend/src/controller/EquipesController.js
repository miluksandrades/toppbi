const knex = require("../connection");

module.exports ={
    async getEquipe(req, res){
        const equipes = await knex('equipe').select('*').orderBy('responsavel', 'asc');

        return res.status(200).json(equipes);
    },

    async getEquipeById(req, res){
        const {id} = req.params;

        const equipe = await knex('equipe').select('*')
        .where('id', id)
        .orderBy('responsavel', 'asc');

        return res.status(200).json(equipe);
    },

    async createEquipe(req, res){
        const {responsavel, auxiliar} = req.body;

        try{
            await knex('equipe').insert({
                responsavel, auxiliar
            })

            return res.status(200).json({msg: 'Salvo com sucesso'});
        } catch (e){
            return res.status(400).json({msg: e})
        }
    },

    async updateEquipe(req, res){
        const {id} = req.params;
        const {responsavel, auxiliar} = req.body;

        try{
            await knex('equipe').where('id', id).update({
                responsavel, auxiliar
            })

            return res.status(200).json({msg: 'OK'})
        } catch (e){
            return res.status(400).json({msg: e})
        }
    },

    async deleteEquipe(req, res){
        const {id} = req.params;

        try{
            const equipe = await knex('equipe').where('id', id).delete();

            if(!equipe)
                return res.status(200).json({msg: 'OK'});
        } catch (e){
            return res.status(400).json({msg: e})
        }
    }

}