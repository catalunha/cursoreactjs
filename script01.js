function entrar() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome ?');
    if (texto === '') {
        alert('Digite seu nome!!');
        area.innerHTML = 'Então bem vindo...';
    } else {
        area.innerHTML = texto;
    }
}

function entrar2(nome) {
    var area = document.getElementById('area2');
    var sobrenome = prompt('Digite seu sobrenome ?');
    if (sobrenome === '') {
        alert('Digite seu nome!!');
        area.innerHTML = 'Então bem vindo ' + nome;
    } else {
        area.innerHTML = 'Então bem vindo ' + nome + sobrenome;
    }
}