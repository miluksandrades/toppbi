const knex = require("../connection")

module.exports = {
    async getAtendimentos(req, res) {
        const atendimento = await knex('atendimento')
            .sum('qtde');

        var qtd = []
        atendimento.forEach(e => {
            qtd.push(e['sum'])
        })

        return res.status(200).json(qtd);
    },

    async getAtendimentoDia(req, res) {
        const {
            dtinicio,
            dtfim
        } = req.params;

        const atendimento = await knex.column(knex.raw("to_char(dtatendimento, 'DD-mm') as dia"))
            .sum('qtde')
            .from('atendimento')
            .where('dtatendimento', '>=', dtinicio)
            .andWhere('dtatendimento', '<=', dtfim)
            .groupBy('dtatendimento')
            .orderBy('dtatendimento')

        var dia = []
        atendimento.forEach(e => {
            dia.push(e['dia'])
        })

        return res.status(200).json(dia)
    },

    async getAtendimentoQtd(req, res) {
        const {
            dtinicio,
            dtfim
        } = req.params;

        const atendimento = await knex.column(knex.raw("to_char(dtatendimento, 'DD-mm') as dia"))
            .sum('qtde')
            .from('atendimento')
            .where('dtatendimento', '>=', dtinicio)
            .andWhere('dtatendimento', '<=', dtfim)
            .groupBy('dtatendimento')
            .orderBy('dtatendimento')

        var qtd = []
        atendimento.forEach(e => {
            qtd.push(e['sum'])
        })

        return res.status(200).json([{
            data: qtd,
            label: ''
        }])
    },

    async getAtendimentoWhatsapp(req, res) {
        const whatsapp = await knex('atendimento')
            .sum('qtde')
            .where('canal', '=', 1)

        var qtd = [];
        whatsapp.forEach(e => {
            qtd.push(e['sum'])
        })

        return res.status(200).json(qtd);
    },

    async getAtendimentoFacebook(req, res) {
        const facebook = await knex('atendimento')
            .sum('qtde')
            .where('canal', '=', 2)

        var qtd = [];
        facebook.forEach(e => {
            qtd.push(e['sum'])
        })

        return res.status(200).json(qtd);
    },

    async getAtendimentoWhatsappMes(req, res) {
        const whastapp = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtatendimento) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('qtde')
            .from('atendimento')
            .where('canal', '=', 1)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'), 'asc')

        var mes = []
        whastapp.forEach(e => {
            mes.push(e['mes'])
        })

        return res.status(200).json(mes);
    },

    async getAtendimentoWhatsappQtde(req, res) {
        const whastapp = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtatendimento) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('qtde')
            .from('atendimento')
            .where('canal', '=', 1)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'), 'asc')

        var qtde = [];
        whastapp.forEach(e => {
            qtde.push(e['sum'])
        })

        return res.status(200).json([{
            data: qtde,
            label: ''
        }]);
    },

    async getAtendimentoFacebookMes(req, res) {
        const facebook = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtatendimento) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('qtde')
            .from('atendimento')
            .where('canal', '=', 2)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'), 'asc')

        var mes = []
        facebook.forEach(e => {
            mes.push(e['mes'])
        })

        return res.status(200).json(mes);
    },
    async getAtendimentoFacebookQtde(req, res) {
        const facebook = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtatendimento) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtatendimento) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('qtde')
            .from('atendimento')
            .where('canal', '=', 2)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtatendimento)'), 'asc')

        var qtde = [];
        facebook.forEach(e => {
            qtde.push(e['sum'])
        })

        return res.status(200).json([{
            data: qtde,
            label: ''
        }]);
    },

    async getAtendimentosPorAgente(req, res) {
        const atendimento = await knex.select('agente.atendente')
            .column(knex.raw('(SUM(qtde)*100) / (SELECT SUM(qtde) FROM atendimento WHERE fkagente <> 10) as porcentagem'))
            .from('atendimento')
            .leftJoin('agente', 'fkagente', 'agente.id')
            .where('fkagente', '<>', 10)
            .groupBy('agente.atendente')
            .orderBy('agente.atendente')

        var agente = []
        atendimento.forEach(e => {
            agente.push(e['atendente'])
        })

        return res.status(200).json(agente);
    },

    async getAtendimentosPorAgenteQtd(req, res) {
        const atendimento = await knex.column('agente.atendente')
            .column(knex.raw('(SUM(qtde)*100) / (SELECT SUM(qtde) FROM atendimento WHERE fkagente <> 10) as porcentagem'))
            .from('atendimento')
            .leftJoin('agente', 'fkagente', 'agente.id')
            .where('fkagente', '<>', 10)
            .groupBy('agente.atendente')
            .orderBy('agente.atendente')

        var qtde = []
        atendimento.forEach(e => {
            qtde.push(e['porcentagem'])
        })

        return res.status(200).json(qtde);
    },

    async getAtendimentosPorAgenteTabela(req, res) {
        const atendimento = await knex.column('agente.atendente')
            .sum('qtde')
            .from('atendimento')
            .leftJoin('agente', 'fkagente', 'agente.id')
            .where('fkagente', '<>', 10)
            .groupBy('agente.atendente')
            .orderBy('sum', 'desc')

        return res.status(200).json(atendimento)
    },

    async getResumoAtendimentos(req, res) {
        const atendimento = await knex.column(knex.raw("CASE WHEN canal = 1 THEN 'WHATSAPP'" +
                "WHEN canal = 2 THEN 'FACEBOOK'" +
                "ELSE 'O' END as canal"))
            .sum('qtde')
            .from('atendimento')
            .groupBy('canal')
            .orderBy('canal', 'asc')

        return res.status(200).json(atendimento)
    },

    async somaGeral(req, res) {
        const soma = await knex('atendimento').sum('qtde');
        var qtd = [];
        soma.forEach(e =>{
            qtd.push(e['sum'])
        })

        return res.status(200).json(qtd)
    }
}