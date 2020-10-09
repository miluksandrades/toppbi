const knex = require("../connection");

module.exports = {
    async getAtm(req, res) {
        
        const torres = await knex.select('torres.id')
            .column('torres.descricao')
            .sum('radios.numclientes as qtde')
            .from('radios')
            .leftJoin('torres', 'radios.fktorre', 'torres.id')
            .where('fkmunicipio', '=', 1)
            .groupBy('torres.id', 'torres.descricao')
            .orderBy('torres.descricao')

        return res.status(200).json(torres);
    },
    async getBn(req, res) {
        const torres = await knex.select('torres.id')
        .column('torres.descricao')
        .sum('radios.numclientes as qtde')
        .from('radios')
        .leftJoin('torres', 'radios.fktorre', 'torres.id')
        .where('fkmunicipio', '=', 2)
        .groupBy('torres.id', 'torres.descricao')
        .orderBy('torres.descricao')

        return res.status(200).json(torres);
    },
    async getMed(req, res) {
        const torres = await knex.select('torres.id')
        .column('torres.descricao')
        .sum('radios.numclientes as qtde')
        .from('radios')
        .leftJoin('torres', 'radios.fktorre', 'torres.id')
        .where('fkmunicipio', '=', 3)
        .groupBy('torres.id', 'torres.descricao')
        .orderBy('torres.descricao')

        return res.status(200).json(torres);
    },

    async getConexoesAtm(req, res){
        var qtd = [];
        const num = await knex('radios')
        .column(knex.raw('cast(sum(numclientes) as Integer) as qtde'))
        .leftJoin('torres', 'fktorre', 'torres.id')
        .where('torres.fkmunicipio', '=', 1)

        num.forEach(e =>{
            qtd.push(e['qtde'])
        })

        return res.json(qtd);
    },
    async getConexoesBn(req, res){
        var qtd = [];
        const num = await knex('radios')
        .column(knex.raw('cast(sum(numclientes) as Integer) as qtde'))
        .leftJoin('torres', 'fktorre', 'torres.id')
        .where('torres.fkmunicipio', '=', 2)

        num.forEach(e =>{
            qtd.push(e['qtde'])
        })

        return res.json(qtd);
    },
    async getConexoesMed(req, res){
        var qtd = [];
        const num = await knex('radios')
        .column(knex.raw('cast(sum(numclientes) as Integer) as qtde'))
        .leftJoin('torres', 'fktorre', 'torres.id')
        .where('torres.fkmunicipio', '=', 3)

        num.forEach(e =>{
            qtd.push(e['qtde'])
        })

        return res.json(qtd);
    },

    async numConexoes(req, res){
        const {id} = req.params;

        var qtd = [];

        const rel = await knex.column(knex.raw('CAST(sum(radios.numclientes) as INTEGER)'))
        .from('radios')
        .leftJoin('torres', 'fktorre', 'torres.id')
        .where('torres.id', '=', id)

        rel.forEach(element => {
            qtd.push(element['sum'])
        });

        return res.send(qtd)
    },

    async getResumoEquipamentos(req, res) {
        const equipamentos = await knex.column('descricao')
            .sum('qtde as qtde')
            .column(knex.raw('coalesce(sum(valor), 0) as valor'))
            .from('equipamentos')
            .groupBy('descricao')
            .orderBy('descricao');

        return res.status(200).json(equipamentos);
    },

    async getResumoRadios(req, res) {
        const radios = await knex.column('modelo as descricao')
            .count('id as qtde')
            .column(knex.raw('coalesce(sum(valor), 0) as valor'))
            .from('radios')
            .groupBy('modelo')
            .orderBy('modelo');

        return res.status(200).json(radios);
    },

    async getResumoAntenas(req, res) {
        const radios = await knex.column('antena as descricao')
            .count('id as qtde')
            .from('radios')
            .groupBy('antena')
            .orderBy('antena');

        return res.status(200).json(radios);
    },

    async getTorreById(req, res) {
        const {
            id
        } = req.params;

        const torre = await knex.select('torres.descricao')
            .column('torres.ip')
            .column('torres.endereco')
            .column('torres.bairro')
            .column('torres.tipotorre')
            .column('municipio.descricao as municipio')
            .column('torres.obs')
            .from('torres')
            .leftJoin('municipio', 'torres.fkmunicipio', 'municipio.id')
            .where('torres.id', id);

        return res.status(200).json(torre);
    },

    async getImagens(req, res) {
        const {
            id
        } = req.params;

        const imagem = await knex('imagens').select('*')
            .where('fktorre', id);

        return res.status(200).json(imagem);
    },

    async deleteImage(req, res) {
        const {
            id
        } = req.params;

        const imagem = await knex('imagens').where('id', id).delete();

        if (!imagem) {
            return res.status(400).json({
                msg: 'Erro ao exlcuir'
            })
        }

        return res.status(200).json({
            msg: 'Ok'
        })
    },

    async create(req, res) {
        const {
            descricao,
            ip,
            endereco,
            bairro,
            tipotorre,
            obs,
            fkmunicipio
        } = req.body;

        await knex('torres').insert({
            descricao,
            ip,
            endereco,
            bairro,
            tipotorre,
            obs,
            fkmunicipio
        })

        return res.status(200).json({
            msg: 'OK'
        })
    },

    async alterTorre(req, res) {
        const {
            descricao,
            ip,
            endereco,
            bairro,
            tipotorre,
            obs
        } = req.body;
        const {
            id
        } = req.params;

        await knex('torres').where('id', id)
            .update({
                descricao,
                ip,
                endereco,
                bairro,
                tipotorre,
                obs
            });

        return res.status(200).json({
            msg: 'OK'
        })
    },

    async delete(req, res) {
        const {
            id
        } = req.params;

        const torre = await knex('torres').where('id', id).delete();

        if (!torre) {
            return res.status(200).json({
                msg: 'Torre not Found'
            });
        }

        return res.status(200).json({
            msg: 'OK'
        })
    }
}