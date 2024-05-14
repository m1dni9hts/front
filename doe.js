function selecionar(elemento_clicado) {
    // Removendo a seleção do elemento atualmente selecionado
    document.querySelector('.selecionado').className = 'op';

    // Adicionando classe CSS de seleção na opção clicada
    elemento_clicado.className = 'selecionado';
}

let opcoes = document.querySelector(".opcoes").querySelectorAll('div');
// console.log(`Opções encontradas: ${opcoes.length}`);
for(let opcao of opcoes) {
    opcao.addEventListener('click', function () {
        selecionar(this)
    });
}

async function gerar_qr_code() {
    const dados = {
        instituicao: 'BEBEZITO MAILIOTE',
        cnpj: '45933273000160',
        estado: 'Rio Grande do Sul',
        valor: document.querySelector('#valor_doacao').value
    };
    
    const QRCode = await fetch('http://127.0.0.1:3000/gerar_qr_code', 
        {
            method: 'POST',
            mode: 'cors', 
            headers: {"Content-type": "application/json;charset=UTF-8", 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify(dados)
        }
    );
    console.log(QRCode);
}

document.querySelector('#valor_doacao').addEventListener('keyup', function() {
    this.value = this.value.replace(/[^\d]/, '').toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});

document.querySelector('#gerar_qrcode').addEventListener('click', gerar_qr_code);
