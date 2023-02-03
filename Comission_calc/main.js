
const valoresUnitarios = [
    {item: "revisao",
    valor: 395},
    {item: "revisaoPower",
    valor: 50
    },
    {item:"rainbowmate",
    valor:1632
    },
    {item: "aquamate",
    valor: 2784,
    },
    {item:"power",
    valor:2784
    },
    {item: "supermop",
    valor: 780},
    {item: "minijet",
    valor: 1737.60},
    {item: "rainjet",
    valor: 1737.60},
    {item: "rainmate",
    valor: 1150},
    {item: "taxaDeEntrega",
    valor: 17.5},
    {item: "servicos",
    valor: 20,
    },
    {item: "shampoo",
    valor: 25},
    {item: "deo",
    valor: 30
    },
    {item: "kit",
    valor: 25}
]
const calculo = document.querySelector("button");
const vendedor = document.getElementById("vendedor")
const revisaoNivel1 = 5000;
const revisaoNivel2 = 13440;
const revisaoNivel3 = 16800;
const revisoes = document.getElementById("revisoes");
const revisoesPower = document.getElementById("revpower");
const outros = document.getElementById("outros");
let porcentagem = 0;

let comissaoRevisao = 0;
const valorPecas = document.getElementById("pecas");
let porcentagemPecas = 0.05;
const qdtadeFiltros = document.getElementById("filtros");

let comissaoFiltro = 0;
const qtdadeMaquinas = document.getElementById("maquinas");
let valorPorMaquina = 500;
const qtdadeShampoo= document.getElementById("shampoo");
const qtdadeDeo = document.getElementById("deo");
const qtdadeKit = document.getElementById("kit");
const qtdadeRbwmate = document.getElementById("rbwmate");
const qtdadeAquamate = document.getElementById("aquamate");
const qtdadePower = document.getElementById("power");
const qtdadeSuperMop = document.getElementById("supermop");
const qtdadeRainjet = document.getElementById("rainjet");
const qtdadeMinijet = document.getElementById("minijet");
const qtdadeRainMate = document.getElementById("rainmate");
const qtdadeServicos = document.getElementById("servicos");
const qtdadeTaxas = document.getElementById("taxas");
let porcentagemComissaoItens1 = 0.1;
let porcentagemComissaoItens2 = 0.2;

function calculaComissaoRevisoes (){
    let totalRevisoes = ((revisoesValor * valoresUnitarios[0].valor)+(revisoesPowerValor * valoresUnitarios[1].valor) + (outrosValor));
    console.log(totalRevisoes);
    if (totalRevisoes > revisaoNivel1 && totalRevisoes <= revisaoNivel2){
        porcentagem = 0.02
    } else if(totalRevisoes > revisaoNivel2 && totalRevisoes <= revisaoNivel3){
        porcentagem = 0.03
    } else if(totalRevisoes > revisaoNivel3) {
        porcentagem = 0.05
    } else {
        porcentagem = 0;
    }
    return porcentagem * totalRevisoes; 
}
function calculaComissaoPecas (){
    return valorPecasValor * porcentagemPecas
}
function calculaComissaoFiltros (){
    let porcentagemDeFiltrosTrocados = (qtdadeFiltrosValor/revisoesValor);
    if(porcentagemDeFiltrosTrocados > 0.3 && porcentagemDeFiltrosTrocados < 0.5){
        comissaoFiltro = 80;
    } if (porcentagemDeFiltrosTrocados >= 0.5){
        comissaoFiltro = 100;
    } else {
        comissaoFiltro = 0;
    }
    return qtdadeFiltrosValor * comissaoFiltro;
}
function calculaComissaoVendasDeMaquina(){
    if(qtdadeMaquinasValor <3){
        valorPorMaquina = 500;
    } else {
        valorPorMaquina = 800;
    }
    return valorPorMaquina * qtdadeMaquinasValor;
}

function calculaComissaoItens (){
    return (
        (qtdadeRbwmateValor * porcentagemComissaoItens1 * valoresUnitarios[2].valor)
        +(qtdadeAquamateValor * porcentagemComissaoItens1 *  valoresUnitarios[3].valor)
        +(qtdadePowerValor * porcentagemComissaoItens1 * valoresUnitarios[4].valor)
        +(qtdadeSuperMopValor * porcentagemComissaoItens1 * valoresUnitarios[5].valor)
        +(qtdadeMinijetValor * porcentagemComissaoItens1 * valoresUnitarios[6].valor)
        +(qtdadeRainjetValor * porcentagemComissaoItens1 * valoresUnitarios[7].valor)
        +(qtdadeRainMateValor * porcentagemComissaoItens2 * valoresUnitarios[8].valor)
        +(qtdadeTaxasValor * valoresUnitarios[9].valor)
        +(qtdadeServicosValor * valoresUnitarios[10].valor)
        +(qtdadeShampooValor * valoresUnitarios[11].valor)
        +(qtdadeDeoValor * valoresUnitarios[12].valor)
        +(qtdadeKitValor * valoresUnitarios[13].valor))
}

calculo.addEventListener ('click', (e,msg)=>{
    e.preventDefault();
    revisoesValor = revisoes.value;
    revisoesPowerValor = revisoesPower.value;
    outrosValor = parseInt(outros.value);
    valorPecasValor = valorPecas.value;
    qtdadeFiltrosValor = qdtadeFiltros.value;
    qtdadeMaquinasValor = qtdadeMaquinas.value;
    qtdadeShampooValor = qtdadeShampoo.value;
    qtdadeDeoValor = qtdadeDeo.value;
    qtdadeKitValor = qtdadeKit.value;
    qtdadeRbwmateValor = qtdadeRbwmate.value;
    qtdadeAquamateValor = qtdadeAquamate.value;
    qtdadePowerValor = qtdadePower.value;
    qtdadeSuperMopValor = qtdadeSuperMop.value;
    qtdadeRainjetValor = qtdadeRainjet.value;
    qtdadeMinijetValor = qtdadeMinijet.value;
    qtdadeRainMateValor = qtdadeRainMate.value;
    qtdadeServicosValor = qtdadeServicos.value;
    qtdadeTaxasValor = qtdadeTaxas.value;
    vendedorNome = vendedor.value;
    
    let comissaoFinal = calculaComissaoFiltros() + calculaComissaoItens() + calculaComissaoPecas ()+ calculaComissaoRevisoes() + calculaComissaoVendasDeMaquina();
    msg = alert(`a comissao de é ${vendedorNome} de ${comissaoFinal}`)
    
})