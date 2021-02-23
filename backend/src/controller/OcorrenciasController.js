const knex = require("../connection");

module.exports = {
    async index(req, res) {
        const ocorrencia = await knex.select('*').from('ocorrencia')

        return res.status(200).json(ocorrencia);
    },

    async getFiveTask(req, res) {
        const ocorrencia = await knex.select('operadora.descricao')
            .column('tiporegistro.descricao as problema')
            .column(knex.raw('EXTRACT(day from dtinicio) as day' ))
            .column(knex.raw('EXTRACT(month from dtinicio) as month'))
            .column(knex.raw('EXTRACT(hour from dtinicio) as hora' ))
            .column(knex.raw('EXTRACT(minutes from dtinicio) as min'))
            .from('ocorrencia')
            .leftJoin('operadora', 'fkoperadora', 'operadora.id')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .orderBy("dtinicio", "desc")
            .limit(5);

        return res.status(200).json(ocorrencia);
    },

    async getAllToday(req, res) {
        const result = await knex('ocorrencia')
            .column(knex.raw('COALESCE(count(id), 0) as total_dia'))
            .where(knex.raw('Extract(day from dtinicio) = Extract(day from Now())'))
            .andWhereRaw(`Extract(month from dtinicio) = Extract(month from Now())`)
            .andWhereRaw(`Extract(year from dtinicio) = Extract(year from Now())`);

        return res.status(200).json(result);
    },

    async getAllMonth(req, res) {
        const result = await knex('ocorrencia')
            .column(knex.raw('COALESCE(count(id), 0) as total_mes'))
            .where(knex.raw('Extract(month from dtinicio) = Extract(month from Now())'))
            .andWhereRaw(`Extract(year from dtinicio) = Extract(year from Now())`);

        return res.status(200).json(result);
    },

    async getAllTaskPerOperator(req, res) {
        const result = await knex('ocorrencia')
            .column('operadora.descricao')
            .column(knex.raw('COALESCE(COUNT(ocorrencia.id), 0) as qtde'))
            .leftJoin('operadora', 'fkoperadora', 'operadora.id')
            .groupBy('operadora.descricao')
            .orderBy('qtde', 'desc');

        return res.status(200).json(result);
    },

    async getMorDown(req, res) {
        const result = await knex('ocorrencia')
            .column('operadora.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('operadora', 'fkoperadora', 'operadora.id')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('tiporegistro.id', '=', 4)
            .groupBy('operadora.descricao')
            .orderBy('qtde', 'desc')
            .limit(1);

        return res.status(200).json(result);
    },

    async getBrava(req, res) {

        var descricao = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 7)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            descricao.push(e['descricao'])
        })

        return res.status(200).json(descricao);
    },

    async getBravaQtde(req, res) {

        var qtde = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 7)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            qtde.push(e['qtde'])
        })

        return res.status(200).json(qtde);
    },

    async getJunto(req, res) {

        var descricao = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 8)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            descricao.push(e['descricao'])
        })

        return res.status(200).json(descricao);
    },

    async getJuntoQtde(req, res) {

        var qtde = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 8)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            qtde.push(e['qtde'])
        })

        return res.status(200).json(qtde);
    },

    async getVivo(req, res) {

        var descricao = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 9)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            descricao.push(e['descricao'])
        })

        return res.status(200).json(descricao);
    },

    async getVivoQtde(req, res) {

        var qtde = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 9)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            qtde.push(e['qtde'])
        })

        return res.status(200).json(qtde);
    },
    async getSea(req, res) {

        var descricao = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 10)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            descricao.push(e['descricao'])
        })

        return res.status(200).json(descricao);
    },

    async getSeaQtde(req, res) {

        var qtde = [];

        const brava = await knex('ocorrencia')
            .column('tiporegistro.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('tiporegistro', 'fktiporeg', 'tiporegistro.id')
            .where('fkoperadora', '=', 10)
            .groupBy('tiporegistro.descricao')

        brava.forEach(e => {
            qtde.push(e['qtde'])
        })

        return res.status(200).json(qtde);
    },

    async getDownPerOperator(req, res) {

        var q = [];

        const quedas = await knex('ocorrencia')
            .column('operadora.descricao')
            .count('ocorrencia.id')
            .leftJoin('operadora', 'ocorrencia.fkoperadora', 'operadora.id')
            .where('fktiporeg', '=', 4)
            .groupBy('operadora.descricao')

        quedas.forEach(e => {
            q.push(e['descricao'])
        });

        return res.status(200).json(q);
    },

    async getDownPerOperatorQtde(req, res) {

        var q = [];

        const quedas = await knex('ocorrencia')
            .column('operadora.descricao')
            .count('ocorrencia.id as qtde')
            .leftJoin('operadora', 'ocorrencia.fkoperadora', 'operadora.id')
            .where('fktiporeg', '=', 4)
            .groupBy('operadora.descricao')

        quedas.forEach(e => {
            q.push(e['qtde'])
        });

        res.status(200).json(q)
    },

    async getOcorrenciaPorMes(req, res) {
        var mes = []
        //var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            mes.push(e['mes'])
            //qtd.push(e['count'])
        })

        return res.status(200).json(mes)
    },
    async getOcorrenciaPorMesQtd(req, res) {
        //var mes = []
        var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            //mes.push(e['mes'])
            qtd.push(e['count'])
        })

        return res.status(200).json([{
            data: qtd,
            label: ''
        }])
    },

    async getBravaOcorrenciaPorMes(req, res) {
        var mes = []
        //var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .where('fkoperadora' , '=', 7)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            mes.push(e['mes'])
            //qtd.push(e['count'])
        })

        return res.status(200).json(mes)
    },
    async getBravaOcorrenciaPorMesQtd(req, res) {
        //var mes = []
        var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .where('fkoperadora' , '=', 7)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            //mes.push(e['mes'])
            qtd.push(e['count'])
        })

        return res.status(200).json([{
            data: qtd,
            label: ''
        }])
    },
    async getJuntoOcorrenciaPorMes(req, res) {
        var mes = []
        //var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .where('fkoperadora' , '=', 8)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            mes.push(e['mes'])
            //qtd.push(e['count'])
        })

        return res.status(200).json(mes)
    },
    async getJuntoOcorrenciaPorMesQtd(req, res) {
        //var mes = []
        var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .where('fkoperadora' , '=', 8)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            //mes.push(e['mes'])
            qtd.push(e['count'])
        })

        return res.status(200).json([{
            data: qtd,
            label: ''
        }])
    },
    async getVivoOcorrenciaPorMes(req, res) {
        var mes = []
        //var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .where('fkoperadora' , '=', 9)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            mes.push(e['mes'])
            //qtd.push(e['count'])
        })

        return res.status(200).json(mes)
    },
    async getVivoOcorrenciaPorMesQtd(req, res) {
        //var mes = []
        var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .where('fkoperadora' , '=', 9)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            //mes.push(e['mes'])
            qtd.push(e['count'])
        })

        return res.status(200).json([{
            data: qtd,
            label: ''
        }])
    },
    async getSeaOcorrenciaPorMes(req, res) {
        var mes = []
        //var qtd = []
        const operadora = await knex('ocorrencia')
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .where('fkoperadora' , '=', 10)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            mes.push(e['mes'])
            //qtd.push(e['count'])
        })

        return res.status(200).json(mes)
    },
    async getSeaOcorrenciaPorMesQtd(req, res) {
        //var mes = []
        var qtd = []
        const operadora = await knex
            .column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtinicio) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtinicio) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .count('id')
            .from('ocorrencia')
            .where('fkoperadora' , '=', 10)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtinicio)'), 'asc')
        
        operadora.forEach(e =>{
            //mes.push(e['mes'])
            qtd.push(e['count'])
        })

        return res.status(200).json([{
            data: qtd,
            label: ''
        }])
    },

    async create(req, res) {
        const {
            dtinicio,
            dtnormal,
            motivo,
            fkoperadora,
            fktiporeg
        } = req.body;

        await knex('ocorrencia').insert({
            dtinicio,
            dtnormal,
            motivo,
            fkoperadora,
            fktiporeg
        });

        return res.status(200).json({
            msg: 'OK'
        });
    },

    async delete(req, res) {
        const {
            id
        } = req.params;

        const ocorrencia = await knex('ocorrencia').where('id', id).delete();

        if (!ocorrencia)
            return res.status(200).json({
                msg: 'Task not found'
            });

        return res.status(200).json({
            msg: 'OK'
        });
    }
}