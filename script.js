function consultaDolar(){
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String (data.getMonth()+1).padStart(2, '0')
    const ano = data.getFullYear()

    const dataAtual = `${mes}-${dia}-${ano}`

    let url =  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='USD'&@dataCotacao='${dataAtual}'&$top=1&$format=json&$select=cotacaoCompra,cotacaoVenda`
    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarCotacao(data);
        });
    });

};

function mostrarCotacao(dados){

    compra = (dados.value[0]['cotacaoCompra'])
    sCompra = compra.toFixed(2)

    venda = (dados.value[0]['cotacaoVenda'])
    sVenda = venda.toFixed(2)

    
    document.getElementById('cotacaoCompra').innerHTML= 'Cotação para compra: R$: ' + sCompra
    document.getElementById('cotacaoVenda').innerHTML= 'Cotação para venda: R$:' + sVenda
  
};


consultaDolar();
