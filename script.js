let cadUser = document.getElementById("cadUser")
let cadSenha = document.getElementById("cadSenha")
let user = document.getElementById("usuario")
let senha = document.getElementById("senha")
function cad(){
    const usuario = {
        Cadastro: cadUser.value,
        Cadastro2: cadSenha.value
    }
    let bancodedados = JSON.parse(localStorage.getItem("bancodedados"))
    if(bancodedados == null){
        bancodedados = [];
    }
    bancodedados.push(usuario)
    localStorage.setItem("bancodedados", JSON.stringify(bancodedados))
    alert("Usuario cadastrado")
    window.location.href = "index.html"
}
function login(){
    let login = user.value;
    let password = senha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancodedados = JSON.parse(localStorage.getItem("bancodedados"));
    if(bancodedados == null){
        mensagem = "Nenhum usuário cadastrado até o momento.";
    }else{
        for(let usuario of bancodedados){
            if(usuario.login == login && usuario.password == password){
                mensagem = "Parabéns, você logou!";
                break;
            }
        }
    }
    alert(mensagem)
}