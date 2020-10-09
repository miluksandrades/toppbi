const knex = require("../connection");

module.exports = {
    async create(req, res) {
        const {
            marca,
            modelo,
            anomodelo,
            placa,
            chassi,
            fkequipe,
            fkmunicipio,
        } = req.body;

        try {
            await knex('carros').insert({
                marca,
                modelo,
                anomodelo,
                placa,
                chassi,
                fkequipe,
                fkmunicipio
            })

            return res.status(200).json({
                msg: 'OK'
            });
        } catch (e) {
            return res.status(200).json({
                msg: e
            })
        }
    },

    async getCarros(req, res) {
        const carros = await knex.select('carros.*')
            .column('equipe.responsavel')
            .from('carros')
            .leftJoin('equipe', 'fkequipe', 'equipe.id')
            .orderBy('carros.marca', 'asc')

        return res.status(200).json(carros);

    },

    async getCarroById(req, res) {
        const {
            id
        } = req.params;

        const carro = await knex('carros').select('*').where('id', id);

        return res.status(200).json(carro);
    },

    async getCarroInfo(req, res) {
        const {
            id
        } = req.params;

        const carro = await knex.select('carros.*')
            .column('equipe.responsavel')
            .column('equipe.auxiliar')
            .column('municipio.descricao as municipio')
            .from('carros')
            .leftJoin('equipe', 'fkequipe', 'equipe.id')
            .leftJoin('municipio', 'fkmunicipio', 'municipio.id')
            .where('carros.id', id);


        return res.status(200).json(carro);
    },

    async updateCarros(req, res) {
        const {
            id
        } = req.params;
        const {
            marca,
            modelo,
            placa,
            fkequipe,
            chassi,
            anomodelo
        } = req.body;

        try {
            await knex('carros').where('id', id)
                .update({
                    marca,
                    modelo,
                    placa,
                    fkequipe,
                    chassi,
                    anomodelo
                })

            return res.status(200).json({
                msg: 'Ok'
            })
        } catch (e) {
            return res.status(400).json({
                msg: e
            })
        }
    },

    async deleteCarro(req, res) {
        const {
            id
        } = req.params;

        const carro = await knex('carros').where('id', id).delete()

        if (!carro) {
            return res.status(400).json({
                msg: 'Erro'
            })
        }

        return res.status(200).json({
            msg: 'Ok'
        });
    },


}