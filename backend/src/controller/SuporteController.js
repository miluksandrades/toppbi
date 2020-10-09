const knex = require("../connection")

module.exports = {
    async getCancPorMes(req, res) {
        //const {id} = req.params;
        const mes = [];

        const cancelado = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtcancelamento) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('cancelamento')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtcancelamento)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtcancelamento)'));

        cancelado.forEach(e => {
            mes.push(e['mes']);
        })

        return res.status(200).json(mes);
    },
    async getCancPorMesQtde(req, res) {
        //const {id} = req.params;
        const qtde = [];
        const cancelado = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtcancelamento) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtcancelamento) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('cancelamento')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtcancelamento)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtcancelamento)'));

        cancelado.forEach(e => {
            qtde.push(e['qtde'])
        });

        return res.status(200).json([{
            data: qtde,
            label: ''
        }]);
    },

    async createCancelamento(req, res) {
        const {
            dtcancelamento,
            qtde,
            fkmunicipio
        } = req.body;

        try {
            await knex('cancelamento').insert({
                dtcancelamento,
                qtde,
                fkmunicipio
            });
            return res.status(200).json({
                msg: 'Salvo com sucesso'
            });

        } catch (e) {
            console.error(e);
            return res.status(400).json({
                msg: 'Erro ao inserir'
            });
        }

    },

    async deleteCanc(req, res) {
        const {
            id
        } = req.params;

        const canc = await knex('cancelamento').where('id', id).delete();

        if (!canc)
            return res.status(400).json({
                msg: 'Erro ao deletar'
            });

        return res.status(200).json({
            msg: 'ok'
        });
    },

    async createMigracao(req, res) {
        const {
            qtde,
            dtmigracao,
            fkmunicipio
        } = req.body;

        try {
            await knex('migracao').insert({
                qtde,
                dtmigracao,
                fkmunicipio
            })

            return res.status(200).json({
                msg: 'Ok'
            });
        } catch (e) {
            return res.status(400).json({
                Error: e
            })
        }
    },

    async getMigPorMes(req, res) {
        var label = [];

        const migracao = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtmigracao) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('migracao')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtmigracao)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtmigracao)'));

        migracao.forEach(e => {
            label.push(e['mes']);
        })

        return res.status(200).json(label);
    },

    async getMigPorMesQtde(req, res) {
        var qtde = [];

        const migracao = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtmigracao) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtmigracao) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('migracao')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtmigracao)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtmigracao)'));

        migracao.forEach(e => {
            qtde.push(e['qtde']);
        })

        return res.status(200).json([{
            data: qtde,
            label: ''
        }]);
    },

    async createMudEnd(req, res) {
        const {
            qtde,
            dtmudend,
            fkmunicipio
        } = req.body;

        try {
            await knex('mudendereco').insert({
                qtde,
                dtmudend,
                fkmunicipio
            })

            return res.status(200).json({
                msg: 'Ok'
            });
        } catch (e) {
            return res.status(200).json({
                msg: e
            })
        }
    },

    async getMudEnd(req, res) {
        var val = [];

        const mudend = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtmudend) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('mudendereco')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtmudend)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtmudend)'));

        mudend.forEach(e =>{
            val.push(e['mes'])
        })

        return res.status(200).json(val)
    },

    async getMudEndQtde(req, res) {
        var val = [];

        const mudend = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtmudend) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtmudend) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('mudendereco')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtmudend)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtmudend)'));

        mudend.forEach(e =>{
            val.push(e['qtde'])
        })

        return res.status(200).json([{data: val, label: ''}])
    },

    async createMudPlan(req, res){

        const {dtmudplan, qtde, fkmunicipio} = req.body;

        try{
            await knex('mudplano').insert({
                dtmudplan, qtde, fkmunicipio
            })

            return res.status(200).json({msg: 'OK'})
        } catch (e){
            return res.status(400).json({msg: 'ERROR: '+e});
        }
    },

    async getMudPlan(req, res){
        var val = [];
        const mudplan = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtmudplan) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('mudplano')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtmudplan)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtmudplan)'));

        mudplan.forEach(e =>{
            val.push(e['mes'])
        })

        return res.status(200).json(val);
    },

    async getMudPlanQtde(req, res){
        var val = [];
        const mudplan = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtmudplan) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtmudplan) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('mudplano')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtmudplan)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtmudplan)'));

        mudplan.forEach(e =>{
            val.push(e['qtde'])
        })

        return res.status(200).json([{data: val, label: ''}])
    }
}