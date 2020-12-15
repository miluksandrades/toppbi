const knex = require("../connection");

module.exports = {
    async totalMes(req, res) {
        const {
            id
        } = req.params;

        var date = new Date();
        var firstDay = new Date(date.getUTCFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0);

        const soma = await knex('registro_vendas')
            .column(knex.raw('COALESCE(sum(valor), 0) as soma_mes'))
            .where('dtvenda', '>=', firstDay)
            .andWhere('dtvenda', '<=', lastDay)
            .andWhere('fkmunicipio', '=', id);

        return res.status(200).json(soma);
    },

    async totalDia(req, res) {
        const {
            id
        } = req.params;

        const soma = await knex('registro_vendas')
            .column(knex.raw('COALESCE(sum(valor), 0) as soma_dia'))
            .where(knex.raw('Extract(day from dtvenda) = Extract(day from Now())'))
            .andWhereRaw(`Extract(month from dtvenda) = Extract(month from Now())`)
            .andWhereRaw(`Extract(year from dtvenda) = Extract(year from Now())`)
            .andWhere('fkmunicipio', '=', id);

        return res.status(200).json(soma);
    },

    async vendasPorMes(req, res) {
        const {
            id
        } = req.params;

        var mes = [];

        const vendas = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtvenda) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('valor as valor')
            .from('registro_vendas')
            .where('registro_vendas.fkmunicipio', '=', id)
            .groupBy(knex.raw("EXTRACT(MONTH FROM dtvenda)"))
            .orderBy(knex.raw("EXTRACT(MONTH FROM dtvenda)"));

        vendas.forEach(e => {
            mes.push(e['mes']);
        })

        return res.status(200).json(mes);
    },

    async vendasPorMesValor(req, res) {
        const {
            id
        } = req.params;

        var valor = [];

        const vendas = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtvenda) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('valor as valor')
            .from('registro_vendas')
            .where('registro_vendas.fkmunicipio', '=', id)
            .groupBy(knex.raw("EXTRACT(MONTH FROM dtvenda)"))
            .orderBy(knex.raw("EXTRACT(MONTH FROM dtvenda)"));

        vendas.forEach(e => {
            valor.push(e['valor']);
        })

        return res.status(200).json([{
            data: valor,
            label: 'Total em R$'
        }]);
    },

    async vendasPorVendedor(req, res) {
        const {
            id
        } = req.params;

        var vendedores = [];

        const vendedor = await knex.select('vendedor.nome as vendedor')
            .sum('registro_vendas.qtde as qtd')
            .from('registro_vendas')
            .leftJoin('vendedor', 'fkvendedor', 'vendedor.id')
            .where('vendedor.fkmunicipio', '=', id)
            .groupBy('registro_vendas.fkvendedor', 'vendedor.nome');

        vendedor.forEach(e => {
            vendedores.push(e['vendedor']);
        })

        return res.status(200).json(vendedores);
    },

    async vendasPorVendedorQtd(req, res) {
        const {
            id
        } = req.params;

        var qtd = [];

        const vendedor = await knex.select('vendedor.nome as vendedor')
            .sum('registro_vendas.qtde as qtd')
            .from('registro_vendas')
            .leftJoin('vendedor', 'fkvendedor', 'vendedor.id')
            .where('vendedor.fkmunicipio', '=', id)
            .groupBy('registro_vendas.fkvendedor', 'vendedor.nome');

        vendedor.forEach(e => {
            qtd.push(e['qtd'])
        })

        return res.status(200).json(qtd);
    },

    async planosVendidosDescricao(req, res) {
        const {
            id
        } = req.params;
        var descricao = [];

        const planos = await knex.select('planos.descricao')
            .column(knex.raw('cast(SUM(qtde) as Integer) as qtd'))
            .from('registro_vendas')
            .leftJoin('planos', 'fkplano', 'planos.id')
            .where('planos.fkmunicipio', '=', id)
            .groupBy('fkplano', 'descricao');

        planos.forEach(e => {
            descricao.push(e['descricao']);
        })
        return res.json(descricao);
    },

    async planosVendidosQtd(req, res) {
        var qtd = [];
        const {
            id
        } = req.params;

        const planos = await knex.select('planos.descricao')
            .column(knex.raw('cast(SUM(qtde) as Integer) as qtd'))
            .from('registro_vendas')
            .leftJoin('planos', 'fkplano', 'planos.id')
            .where('planos.fkmunicipio', '=', id)
            .groupBy('fkplano', 'descricao');

        planos.forEach(e => {
            qtd.push(e['qtd']);
        })
        return res.json(qtd);
    },

    async planoMaisVendido(req, res) {
        const {
            id
        } = req.params;

        const plano = await knex.select('planos.descricao')
            .sum('qtde as qtd')
            .from('registro_vendas')
            .leftJoin('planos', 'fkplano', 'planos.id')
            .where('planos.fkmunicipio', '=', id)
            .groupBy('fkplano', 'descricao')
            .orderBy('qtd', "desc")
            .limit(1);

        return res.status(200).json(plano);
    },

    async vendasPorPlano(req, res) {
        const {
            id
        } = req.params;

        var planos = []

        const plano = await knex.select('planos.descricao')
            .sum('registro_vendas.valor as valor')
            .from('registro_vendas')
            .leftJoin('planos', 'fkplano', 'planos.id')
            .where('planos.fkmunicipio', '=', id)
            .groupBy('registro_vendas.fkplano', 'planos.descricao');

        plano.forEach(e => {
            planos.push(e['descricao'])
        });

        return res.status(200).json(planos);
    },

    async vendasPorPlanoValor(req, res) {
        const {
            id
        } = req.params;

        var valor = []

        const plano = await knex.select('planos.descricao')
            .sum('registro_vendas.valor as valor')
            .from('registro_vendas')
            .leftJoin('planos', 'fkplano', 'planos.id')
            .where('planos.fkmunicipio', '=', id)
            .groupBy('registro_vendas.fkplano', 'planos.descricao');

        plano.forEach(e => {
            valor.push(e['valor'])
        });

        return res.status(200).json(valor);
    },

    async vendasPorVendedorMes(req, res) {
        const {
            id,
            vendedor
        } = req.params;

        var mes = [];

        const result = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtvenda) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('valor as valor')
            .from('registro_vendas')
            .where('fkmunicipio', '=', id)
            .andWhere('fkvendedor', '=', vendedor)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtvenda)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtvenda)'));

        result.forEach(e => {
            mes.push(e['mes']);
        })

        return res.status(200).json(mes);
    },

    async vendasPorVendedorMesValor(req, res) {
        const {
            id,
            vendedor
        } = req.params;

        var valor = [];

        const result = await knex.column(knex.raw("CASE WHEN EXTRACT(MONTH FROM dtvenda) = 1 THEN 'Janeiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 2 THEN 'Fevereiro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 3 THEN 'Março'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 4 THEN 'Abril'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 5 THEN 'Maio'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 6 THEN 'Junho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 7 THEN 'Julho'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 8 THEN 'Agosto'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 9 THEN 'Setembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 10 THEN 'Outubro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 11 THEN 'Novembro'" +
                "WHEN EXTRACT(MONTH FROM dtvenda) = 12 THEN 'Dezembro'" +
                "ELSE 'o' END as mes"))
            .sum('valor as valor')
            .from('registro_vendas')
            .where('fkmunicipio', '=', id)
            .andWhere('fkvendedor', '=', vendedor)
            .groupBy(knex.raw('EXTRACT(MONTH FROM dtvenda)'))
            .orderBy(knex.raw('EXTRACT(MONTH FROM dtvenda)'));

        result.forEach(e => {
            valor.push(e['valor']);
        })

        return res.status(200).json([{
            data: valor,
            label: 'Total em R$'
        }]);
    },
}