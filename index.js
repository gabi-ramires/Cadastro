


function VerificaSenha() {

    var senha = document.querySelector('input[name=senha]');
    var rep_senha = document.querySelector('input[name=rep_senha]');

    var senhaValue = senha.value;
    var rep_senhaValue = rep_senha.value;


    var aviso = document.getElementById('aviso')
    var fieldsetSenha = document.getElementById('Senha')
    var fieldsetRep_senha = document.getElementById('Rep_senha')

    if ((senhaValue == rep_senhaValue) && (senhaValue != "") && (rep_senhaValue != "")) {
        rep_senha.setCustomValidity('');
        aviso.setAttribute('style', 'display:none')

        fieldsetSenha.setAttribute('style', 'border-color:green')
        fieldsetRep_senha.setAttribute('style', 'border-color:green')
        fieldsetSenha.style.color = 'green'
        fieldsetRep_senha.style.color = 'green'


    } else {
        rep_senha.setCustomValidity('As senhas não conferem');
        aviso.innerHTML = "As senhas não conferem"

        aviso.setAttribute('style', 'display:visible')
        fieldsetSenha.setAttribute('style', 'border-color:red')
        fieldsetRep_senha.setAttribute('style', 'border-color:red')
        fieldsetSenha.style.color = 'red'
        fieldsetRep_senha.style.color = 'red'
    }

}


var form = document.getElementById('form').onsubmit = function () {

    return (
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Seu cadastro foi realizado com sucesso!',
            showConfirmButton: false,
            timer: 4000
        })
    )
}

var Nome = document.getElementById('nome')
var fieldsetNome = document.getElementById('Nome')

function VerificaNome() {


    if ((Nome.value == null) || (Nome.value == "")) {
        Nome.setCustomValidity('O nome não pode ser vazio.');
        aviso.innerHTML = "O nome não pode ser vazio."

        aviso.setAttribute('style', 'display:visible')
        fieldsetNome.setAttribute('style', 'border-color:red')

        fieldsetNome.style.color = 'red'

        console.log("entrou")

    } else {
        Nome.setCustomValidity('');
        aviso.innerHTML = ""

        aviso.setAttribute('style', 'display:none')
        fieldsetNome.setAttribute('style', 'border-color:green')

        fieldsetNome.style.color = 'green'

        console.log("saiu")
    }
}

function VerificaTel() {
    var telefone = document.getElementById('tel');

    var textoAtual = telefone.value;

    var textoAjustado;

    var parte1 = textoAtual.slice(0, 2);
    var fieldsetTel = document.getElementById('Tel')


    if (textoAtual.length == 2) {

        textoAjustado = `(${parte1}) `
        telefone.value = textoAjustado;
    }
    else if (textoAtual.length == 10) {

        console.log("entrou" + telefone.value)

        telefone.value += ` - `

    }

    console.log(telefone.value)

    if (textoAtual.length == 17) {
        fieldsetTel.setAttribute('style', 'border-color:green')

        fieldsetTel.style.color = 'green'
    }

}


var fieldsetEmail = document.getElementById('Email')
var Email = document.querySelector('input[name=email]')


var arrayLetras = []
var i = -1;
var aux = 0;

function VerificaEmail() {

    i = i + 1;

    arrayLetras = Email.value.split("")

    console.log("------ inicio ---------")
    console.log(i)
    console.log(arrayLetras)
    console.log(arrayLetras[i])
    console.log(arrayLetras.length)
    console.log("------ fim ---------")

    for (var j = 0; j <= arrayLetras.length; j++) {

        if (arrayLetras[j] == '@') {

            aux = aux + 1;
            console.log("aux: " + aux)

        }

        else if (arrayLetras[j] == '.' && aux > 1) {

            console.log("ENTROUUU")
            fieldsetEmail.setAttribute('style', 'border-color:green')

            fieldsetEmail.style.color = 'green'
        }
    }
}








