const knex = require("../connection");

module.exports = {
    async create(req, res) {
        const {
            descricao,
            marca,
            qtde,
            obs,
            valor
        } = req.body;

        const {
            id
        } = req.params;

        await knex('equipamentos').insert({
            descricao,
            marca,
            qtde,
            obs,
            fktorre: id,
            valor
        });

        return res.status(200).json({
            msg: 'OK'
        });
    },

    async getEquipamentos(req, res) {
        const {
            id
        } = req.params;

        const equipamentos = await knex.select('*')
            .from('equipamentos')
            .where('fktorre', '=', id);

        return res.json(equipamentos);
    },

    async getEquipamentosById(req, res) {
        const {
            id
        } = req.params;

        const equipamento = await knex('equipamentos').where('id', id).select('*');

        if (!equipamento) {
            return res.status(400).json(msgErr)
        }

        return res.status(200).json(equipamento)
    },

    async alterEquipamento(req, res) {
        const {
            descricao,
            marca,
            qtde,
            obs,
            valor
        } = req.body;
        const {
            id
        } = req.params;

        await knex('equipamentos').where('id', id).update({
            descricao,
            marca,
            qtde,
            obs,
            valor
        })

        return res.status(200).json({msg: 'Ok'})

    },

    async delete(req, res) {
        const {
            id
        } = req.params;

        const alter = await knex('equipamentos').where('id', id).delete()

        if (!alter) {
            return res.status(400).json({
                msg: 'Equipamento não encontrado'
            })
        }

        return res.status(200).json({
            msg: 'OK'
        })
    }
}