
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





