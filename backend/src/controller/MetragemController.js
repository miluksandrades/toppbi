const knex = require("../connection")

module.exports = {
    async mediaCustoPorKm(req, res){
        const resultado = await knex.column(knex.raw('CAST(AVG(custoporkm) AS FLOAT) as avg')).from('metragem')
        

        return res.status(200).json(resultado)
    },

    async mediaKmPorLitro(req, res){
        const resultado = await knex.column(knex.raw('CAST(AVG(kmporlitro) AS FLOAT) as avg')).from('metragem')
        

        return res.status(200).json(resultado)
    },

    async getMetragemId(req, res){
        const {id} = req.params;

        const resultado = await knex('metragem')
        .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM mesreferente) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
        .column('kmrodados')
        .column('totallitros')
        .column('custoporkm')
        .column('kmporlitro')
        .where('fkcarro', '=', id)

        return res.status(200).json(resultado)
    },

    async getQuilometrosRodados(req, res) {
        const quilometros = await knex('metragem')
            .column(knex.raw('COALESCE(SUM(kmrodados), 0)'))
            .where(knex.raw('Extract(month from mesreferente) = 9'))
        var qtd = []
        quilometros.forEach(e => {
            qtd.push(e['coalesce'])
        })

        return res.status(200).json(qtd);
    },

    async getCombustivelGasto(req, res) {
        const comb = await knex('metragem')
            .column(knex.raw('COALESCE(SUM(totallitros), 0)'))
            .where(knex.raw('Extract(month from mesreferente) = 9'))
        var qtd = []
        comb.forEach(e => {
            qtd.push(e['coalesce'])
        })

        return res.status(200).json(qtd);
    },

    async custoTotalMes(req, res) {
        const data = await knex.column(knex.raw('COALESCE(SUM(custos), 0)'))
            .from('metragem')
            .where(knex.raw('Extract(month from mesreferente) = 9'))

        var qtd = []
        data.forEach(e => {
            qtd.push(e['coalesce'])
        })

        return res.status(200).json(qtd);
    },

    async combustivelMes(req, res) {
        const {
            id
        } = req.params;

        const resultado = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM mesreferente) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .column('totallitros as litros')
            .from('metragem')
            .where('fkcarro', '=',id)

        var label = []
        resultado.forEach(e => {
            label.push(e['mes'])
        })

        return res.json(label)
    },

    async combustivelMesQtd(req, res) {
        const {
            id
        } = req.params;

        const resultado = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM mesreferente) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .column('totallitros as litros')
            .from('metragem')
            .where('fkcarro', '=', id)

        var qtd = []
        resultado.forEach(e => {
            qtd.push(e['litros'])
        })

        return res.json([{
            data: qtd,
            label: 'Litros'
        }])
    },

    async kmMes(req, res) {
        const {
            id
        } = req.params;

        const resultado = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM mesreferente) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .column('kmrodados')
            .from('metragem')
            .where('fkcarro', '=', id)

        var label = []
        resultado.forEach(e => {
            label.push(e['mes'])
        })

        return res.json(label)
    },

    async kmMesQtd(req, res) {
        const {
            id
        } = req.params;

        const resultado = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM mesreferente) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM mesreferente) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .column('kmrodados')
            .from('metragem')
            .where('fkcarro', '=', id)

        var qtd = []
        resultado.forEach(e => {
            qtd.push(e['kmrodados'])
        })

        return res.json([{
            data: qtd,
            label: 'Km'
        }])
    },


}