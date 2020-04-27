var campos = document.querySelectorAll('.campos');
function add(){
    validaCampo();
    validaPreco();
    validaData();
}

function clean() {
    campos.forEach(e => {
        e.value = '';
    });
}

function validaCampo() {
    let cont = 0;
    campos.forEach(e => {
        e.style.borderColor = 'white';
        if(e.value === null || e.value === ""){
            e.style.borderColor = 'red'
            cont = cont + 1;
        }
    });
    var obrigatorio = document.querySelector('.obrigatorio');
    if (cont >= 1){
        obrigatorio.innerText = 'Todos os campos devem ser preenchidos';
    }
    else {
        obrigatorio.innerText = '';
    }
}

function validaPreco() {
    if(campos[1].value !== null || campos[1].value !== "") {
        var positivo = document.querySelector('.positivo');
        if (campos[1].value <= 0) {
            campos[1].style.borderColor = 'red';
            positivo.innerText = 'O preço deve ser positivo';
        }
        else {
            campos[1].style.borderColor = 'white';
            positivo.innerText = '';
        }
    }
}

function validaData() {
    var dt = campos[4].value;
    var validade = Date.parse(dt);
    var hoje = Date.now();
    let diff = validade - hoje; // Subtrai uma data pela outra
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

    var semana = document.querySelector('.semana');
    if(days < 7){
        campos[4].style.borderColor = 'red';
        semana.innerText = 'A validade deve ser superior a uma semana';
    }
    else {
        campos[4].style.borderColor = 'white';
        semana.innerText = '';
    }
}

var cadastrar = document.querySelector('button#cadastrar');
cadastrar.addEventListener('click',add);

var limpar = document.querySelector('button#limpar');
limpar.addEventListener('click',clean);

