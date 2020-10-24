const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const knex = require('./connection')

const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({
    storage: storage
});

const PlanosController = require('./controller/PlanosController');
const SetorController = require('./controller/SetorController');
const VendedorController = require('./controller/VendedorController');
const VendasController = require('./controller/VendasController');
const RelatoriosController = require('./controller/RelatoriosController');
const MunicipioController = require('./controller/MunicipioController');
const TipoRegistroController = require('./controller/TipoRegistroController');
const OperadoraController = require('./controller/OperadoraController');
const OcorrenciasController = require('./controller/OcorrenciasController');
const TorresController = require('./controller/TorresController');
const EquipamentosController = require('./controller/EquipamentosController');
const RadiosController = require('./controller/RadiosController');
const SuporteController = require('./controller/SuporteController');
const RetencaoController = require('./controller/RetencaoController');
const CarrosController = require('./controller/CarrosController');
const EquipesController = require('./controller/EquipesController');
const MetragemController = require('./controller/MetragemController');
const AtendimentoController = require('./controller/AtendimentoController');

//INICIO VENDAS

//CRUD PLANO
routes.get('/planos', PlanosController.index);
routes.get('/planos/:id', PlanosController.getPlanosByMunicipio);
routes.post('/planos', PlanosController.create);
routes.delete('/planos/:id', PlanosController.delete);

//CRUD SETOR
routes.get('/setor', SetorController.index);
routes.post('/setor', SetorController.create);
routes.delete('/setor/:id', SetorController.delete);

routes.get('/municipios', MunicipioController.index);

//CRUD VENDEDOR
routes.get('/vendedor', VendedorController.index);
routes.get('/vendedor/:id', VendedorController.getVendedorByMunicipio);
routes.post('/vendedor', VendedorController.create);
routes.delete('/vendedor/:id', VendedorController.delete);

//CRUD VENDAS
routes.get('/vendas', VendasController.index);
routes.post('/vendas', VendasController.create);
routes.delete('/vendas/:id', VendasController.delete);

//RELATORIOS
routes.get('/total-mes/:id', RelatoriosController.totalMes);
routes.get('/total-dia/:id', RelatoriosController.totalDia);
routes.get('/planos-vendidos-descricao/:id', RelatoriosController.planosVendidosDescricao);
routes.get('/planos-vendidos-qtd/:id', RelatoriosController.planosVendidosQtd);
routes.get('/plano-mais-vendido/:id', RelatoriosController.planoMaisVendido);
routes.get('/vendas-mes/:id', RelatoriosController.vendasPorMes);
routes.get('/vendas-mes-valor/:id', RelatoriosController.vendasPorMesValor);
routes.get('/vendas-por-vendedor/:id', RelatoriosController.vendasPorVendedor);
routes.get('/vendas-por-vendedor-qtd/:id', RelatoriosController.vendasPorVendedorQtd);
routes.get('/vendas-por-plano/:id', RelatoriosController.vendasPorPlano);
routes.get('/vendas-por-plano-valor/:id', RelatoriosController.vendasPorPlanoValor);
routes.get('/vendas-por-vendedor-mes/:id/:vendedor', RelatoriosController.vendasPorVendedorMes);
routes.get('/vendas-por-vendedor-mes-valor/:id/:vendedor', RelatoriosController.vendasPorVendedorMesValor);
//FIM VENDAS

//INICIO NOC
routes.get('/tipo-ocorrencia', TipoRegistroController.index);
routes.get('/operadoras', OperadoraController.index);
routes.get('/ocorrencia', OcorrenciasController.index);
routes.post('/ocorrencia', OcorrenciasController.create);

routes.get('/torres-atm', TorresController.getAtm);
routes.get('/torres-bn', TorresController.getBn);
routes.get('/torres-med', TorresController.getMed);
routes.get('/total-conexoes-atm', TorresController.getConexoesAtm);
routes.get('/total-conexoes-bn', TorresController.getConexoesBn);
routes.get('/total-conexoes-med', TorresController.getConexoesMed);
routes.get('/torres/conexoes/:id', TorresController.numConexoes);
routes.get('/resumo-radios', TorresController.getResumoRadios);
routes.get('/resumo-equipamentos', TorresController.getResumoEquipamentos);
routes.get('/resumo-antenas', TorresController.getResumoAntenas);
routes.get('/torres/:id', TorresController.getTorreById);
routes.get('/torres/imagens/:id', TorresController.getImagens);
routes.delete('/torres/imagens/:id', TorresController.deleteImage);
routes.post('/torres', TorresController.create);
routes.put('/torres/:id', TorresController.alterTorre);
routes.delete('/torres/:id', TorresController.delete);

routes.post('/api/upload/:id', upload.single('photo'), async (req, res) =>{

    const {id} = req.params;
    const url = 'http://10.200.2.136:3333/static/'+req.file.filename;

    await knex('imagens').insert({
        url,
        fktorre: id
    })
    
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        return res.send({
            success: true
        })
    }
});

routes.get('/radios/:id', RadiosController.getRadios);
routes.get('/radios/radio/:id', RadiosController.getRadioById);
routes.post('/radios/:id', RadiosController.create);
routes.put('/radios/:id', RadiosController.alterRadio);
routes.delete('/radios/:id', RadiosController.delete);

routes.get('/equipamentos/:id', EquipamentosController.getEquipamentos);
routes.get('/equipamentos/equipamento/:id', EquipamentosController.getEquipamentosById);
routes.post('/equipamentos/:id', EquipamentosController.create);
routes.put('/equipamentos/:id', EquipamentosController.alterEquipamento);
routes.delete('/equipamentos/:id', EquipamentosController.delete);

//RELATORIOS
routes.get('/ultimos-registros', OcorrenciasController.getFiveTask);
routes.get('/total-hoje', OcorrenciasController.getAllToday);
routes.get('/total-mes', OcorrenciasController.getAllMonth);
routes.get('/total-ocorrencias', OcorrenciasController.getAllTaskPerOperator);
routes.get('/mais-quedas', OcorrenciasController.getMorDown);
routes.get('/resultado-brava', OcorrenciasController.getBrava);
routes.get('/resultado-brava-qtde', OcorrenciasController.getBravaQtde);
routes.get('/resultado-junto', OcorrenciasController.getJunto);
routes.get('/resultado-junto-qtde', OcorrenciasController.getJuntoQtde);
routes.get('/resultado-vivo', OcorrenciasController.getVivo);
routes.get('/resultado-vivo-qtde', OcorrenciasController.getVivoQtde);
routes.get('/resultado-sea', OcorrenciasController.getSea);
routes.get('/resultado-sea-qtde', OcorrenciasController.getSeaQtde);
routes.get('/quedas-por-operadora', OcorrenciasController.getDownPerOperator);
routes.get('/quedas-por-operadora-qtde', OcorrenciasController.getDownPerOperatorQtde);
routes.get('/ocorrencias-por-mes', OcorrenciasController.getOcorrenciaPorMes);
routes.get('/ocorrencias-por-mes-qtd', OcorrenciasController.getOcorrenciaPorMesQtd);
routes.get('/ocorrencias-por-mes-brava', OcorrenciasController.getBravaOcorrenciaPorMes);
routes.get('/ocorrencias-por-mes-brava-qtd', OcorrenciasController.getBravaOcorrenciaPorMesQtd);
routes.get('/ocorrencias-por-mes-junto', OcorrenciasController.getJuntoOcorrenciaPorMes);
routes.get('/ocorrencias-por-mes-junto-qtd', OcorrenciasController.getJuntoOcorrenciaPorMesQtd);
routes.get('/ocorrencias-por-mes-vivo', OcorrenciasController.getVivoOcorrenciaPorMes);
routes.get('/ocorrencias-por-mes-vivo-qtd', OcorrenciasController.getVivoOcorrenciaPorMesQtd);
routes.get('/ocorrencias-por-mes-sea', OcorrenciasController.getSeaOcorrenciaPorMes);
routes.get('/ocorrencias-por-mes-sea-qtd', OcorrenciasController.getSeaOcorrenciaPorMesQtd);
//FIM NOC

//SUPORTE
routes.get('/cancelamento', SuporteController.getCancPorMes);
routes.get('/cancelamento-qtde', SuporteController.getCancPorMesQtde);
routes.post('/cancelamento', SuporteController.createCancelamento);

routes.get('/retencao', RetencaoController.getRetPorMes);
routes.get('/retencao-qtde', RetencaoController.getRetPorMesQtde);
routes.post('/retencao', RetencaoController.create);

routes.get('/migracao', SuporteController.getMigPorMes);
routes.get('/migracao-qtde', SuporteController.getMigPorMesQtde);
routes.post('/migracao', SuporteController.createMigracao);

routes.get('/mudendereco', SuporteController.getMudEnd);
routes.get('/mudendereco-qtde', SuporteController.getMudEndQtde);
routes.post('/mudendereco', SuporteController.createMudEnd);

routes.get('/mudplano', SuporteController.getMudPlan);
routes.get('/mudplano-qtde', SuporteController.getMudPlanQtde);
routes.post('/mudplano', SuporteController.createMudPlan);

//RELATORIOS SMARTOMNI
routes.get('/total-atendimento', AtendimentoController.getAtendimentos);
routes.get('/atendimento-dia/:dtinicio/:dtfim', AtendimentoController.getAtendimentoDia);
routes.get('/atendimento-qtd/:dtinicio/:dtfim', AtendimentoController.getAtendimentoQtd);
routes.get('/atendimento-por-agente', AtendimentoController.getAtendimentosPorAgente);
routes.get('/atendimento-por-agente-tabela', AtendimentoController.getAtendimentosPorAgenteTabela);
routes.get('/atendimento-por-agente-qtd', AtendimentoController.getAtendimentosPorAgenteQtd);
routes.get('/atendimento-whatsapp', AtendimentoController.getAtendimentoWhatsapp);
routes.get('/atendimento-whatsapp-mes', AtendimentoController.getAtendimentoWhatsappMes);
routes.get('/atendimento-whatsapp-qtd', AtendimentoController.getAtendimentoWhatsappQtde);
routes.get('/atendimento-facebook-mes', AtendimentoController.getAtendimentoFacebookMes);
routes.get('/atendimento-facebook-qtd', AtendimentoController.getAtendimentoFacebookQtde);
routes.get('/atendimento-facebook', AtendimentoController.getAtendimentoFacebook);
//FIM SUPORTE

//FROTAS
routes.get('/frota/equipes', EquipesController.getEquipe);
routes.get('/frota/equipes/:id', EquipesController.getEquipeById);
routes.post('/frota/equipes', EquipesController.createEquipe);
routes.put('/frota/equipes/:id', EquipesController.updateEquipe);
routes.delete('/frota/equipes/:id', EquipesController.deleteEquipe);

routes.get('/frota/carros', CarrosController.getCarros);
routes.get('/frota/carros/:id', CarrosController.getCarroById);
routes.get('/frota/carros/info/:id', CarrosController.getCarroInfo);
routes.post('/frota/carros', CarrosController.create);
routes.put('/frota/carros/:id', CarrosController.updateCarros);
routes.delete('/frota/carros/:id', CarrosController.deleteCarro);

//RELATORIOS
routes.get('/km-rodados', MetragemController.getQuilometrosRodados);
routes.get('/litros-gastos', MetragemController.getCombustivelGasto);
routes.get('/custo-mensal', MetragemController.custoTotalMes);
routes.get('/combustivel-mes/:id', MetragemController.combustivelMes);
routes.get('/combustivel-mes-qtd/:id', MetragemController.combustivelMesQtd);
routes.get('/km-mes/:id', MetragemController.kmMes);
routes.get('/km-mes-qtd/:id', MetragemController.kmMesQtd);
routes.get('/media-custo-km', MetragemController.mediaCustoPorKm);
routes.get('/km-por-litro', MetragemController.mediaKmPorLitro);
routes.get('/metragem/:id', MetragemController.getMetragemId);
routes.get('/consumo-geral-mes', MetragemController.consumoGeralPorMes);
routes.get('/consumo-geral-km', MetragemController.consumoGeralPorMesKm);

module.exports = routes;