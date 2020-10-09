const knex = require("../connection");

module.exports = {
    async getRetPorMes(req, res) {
        //const {id} = req.params;
        const mes = [];

        const retencao = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtretencao) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('retencao')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtretencao)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtretencao)'));
        
        retencao.forEach(e =>{
            mes.push(e['mes']);
        })

        return res.status(200).json(mes);
    },
    async getRetPorMesQtde(req, res) {
        //const {id} = req.params;
        const qtde = [];
        const retencao = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtretencao) = 1 THEN 'Jan'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 2 THEN 'Fev'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 3 THEN 'Mar'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 4 THEN 'Abr'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 5 THEN 'Mai'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 6 THEN 'Jun'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 7 THEN 'Jul'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 8 THEN 'Ago'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 9 THEN 'Set'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 10 THEN 'Out'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 11 THEN 'Nov'" +
                "WHEN EXTRACT(MONTH FROM dtretencao) = 12 THEN 'Dez'" +
                "ELSE 'o' END as mes"))
            .sum('qtde as qtde')
            .from('retencao')
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtretencao)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtretencao)'));

        retencao.forEach(e => {
            qtde.push(e['qtde'])
        });

        return res.status(200).json([{
            data: qtde,
            label: ''
        }]);
    },

    async create(req, res){
        const {qtde, dtretencao, fkmunicipio} = req.body;

        try{
            await knex('retencao').insert({
                qtde,
                dtretencao,
                fkmunicipio
            })
    
            return res.status(200).json({msg: 'Ok'})
        } catch{
            return res.status(400).json({msg: 'Erro'})
        }
    }
}