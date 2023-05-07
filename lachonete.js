function calcular() {


    let codigo = parseInt(document.getElementById('codigo').value);
    let valorTotal = 0;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    const resultado = document.getElementById('resultado');


    switch (codigo) {
        case 100:
            valorTotal = 3.00 * quantidade;
            break;
        case 200:
            valorTotal = 4.00 * quantidade;
            break;
        case 300:
            valorTotal = 5.50 * quantidade;
            break;
        case 400:
            valorTotal = 7.50 * quantidade;
            break;
        case 500:
            valorTotal = 3.50 * quantidade;
            break;
        case 600:
            valorTotal = 2.80 * quantidade;
            break;
        default:
            alert('Produto não existente.');
            return;
    }
    resultado.innerHTML = `Valor total a pagar: R$ ${valorTotal}`;
}
function limpar() {
    document.getElementById('codigo').value = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('resultado').innerHTML = "";
}