const form = document.getElementById('formAgenda');
const nomeValida = [];
const telefoneValida = [];

let linhas = '';
form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionarLinha()
    atualizaTabela()
});


function adicionarLinha(){
    const nome = document.getElementById('Nome');
    const telefone = document.getElementById('Telefone');

    if(nomeValida.includes(nome.value)){
        alert(`A atividade: ${nome.value} já foi inserida`);
    }
    else if (telefoneValida.includes(telefone.value)){
        alert(`A atividade: ${telefone.value} já foi inserida`);
    }
    else{
    nomeValida.push(nome.value);
    telefoneValida.push(telefone.value);

    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    }
    nome.value = "";
    telefone.value = "";
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}