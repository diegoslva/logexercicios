 // Função responsável por inserir os dados na Tabela
function addRow() {

    var table = document.getElementById('results');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    // Captura os valores de referência do form
    td1.innerHTML = document.getElementById('tempo').value;
    td2.innerHTML = document.getElementById('date').value;
    td3.innerHTML = document.getElementById('atividade').value;


//Insere um conteúdo na coluna da Tabela
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.children[0].insertBefore(row, table.children[0].childNodes[1]);
}


