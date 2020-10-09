const knex = require("../connection");

module.exports = {
    async create(req, res) {
        const {
            descricao,
            marca,
            modelo,
            antena,
            ip,
            mac,
            frequencia,
            numclientes,
            obs,
            valor
        } = req.body;

        const {
            id
        } = req.params;

        await knex('radios').insert({
            descricao,
            marca,
            modelo,
            antena,
            ip,
            mac,
            frequencia,
            numclientes,
            obs,
            fktorre: id,
            valor
        });

        return res.status(200).json({
            msg: 'OK'
        });
    },

    async getRadios(req, res) {
        const {
            id
        } = req.params;

        const equipamentos = await knex.select('*')
            .from('radios')
            .where('fktorre', '=', id)
            .orderBy('descricao')

        return res.json(equipamentos);
    },

    async getRadioById(req, res) {
        const {
            id
        } = req.params;



        const radio = await knex('radios').where('id', id).select('*');

        if (!radio) {
            return res.status(400).json(msgErr)
        }

        return res.status(200).json(radio)
    },

    async alterRadio(req, res) {
        const msgOk = `Radio atualizado`

        const {
            id
        } = req.params;
        const {
            descricao,
            marca,
            modelo,
            antena,
            ip,
            mac,
            frequencia,
            numclientes,
            obs,
            valor
        } = req.body;

        await knex('radios').where('id', id)
            .update({
                descricao,
                marca,
                modelo,
                antena,
                ip,
                mac,
                frequencia,
                numclientes,
                obs,
                valor
            })

        return res.status(200).json(msgOk);
    },

    async delete(req, res) {
        const {
            id
        } = req.params;

        const alter = await knex('radios').where('id', id).delete()

        if (!alter) {
            return res.status(400).json({
                msg: 'Radio não encontrado'
            })
        }

        return res.status(200).json({
            msg: 'OK'
        })
    }
}