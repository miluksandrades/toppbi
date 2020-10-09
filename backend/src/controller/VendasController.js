const knex = require("../connection");

module.exports = {
    async index(req, res){
        const vendas = await knex.select('registro_vendas.id', 
        'registro_vendas.valor', 'registro_vendas.qtde', 'planos.descricao as plano', 
        'registro_vendas.dtvenda', 'vendedor.nome as vendedor', 'municipio.descricao as municipio')
        .from('registro_vendas')
        .leftJoin('planos', 'fkplano', 'planos.id')
        .leftJoin('vendedor', 'fkvendedor', 'vendedor.id')
        .leftJoin('municipio', 'registro_vendas.fkmunicipio', 'municipio.id')
        .orderBy('registro_vendas.id');

        //console.log(vendas);

        return res.status(200).json(vendas);
    },

    async create(req, res){
        const {dtvenda, valor, qtde, fkvendedor, fkplano, fkmunicipio} = req.body;

        await knex('registro_vendas').insert({
            dtvenda,
            valor,
            qtde,
            fkvendedor,
            fkplano,
            fkmunicipio
        });

        return res.status(200).json({msg: "OK"});
    },

    async delete(req, res){
        const {id} = req.params;

        const vendas = await knex('registro_vendas').where('id', id).delete();

        if(!vendas){
            return res.status(400).json({msg: "Venda não encontrada"});
        }

        return res.status(200).json({msg: 'Venda Excluida'});
    }
}