function cad(){
    let cadUser = document.getElementById("cadUser").value;
    let cadSenha = document.getElementById("cadSenha").value;
    const cadUsername = {cadUser, cadSenha}
    const bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados ")) || []    
    bancoDeDados.push(cadUsername)
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
    alert("O usuário foi cadastrado com sucesso!")
    window.location.href = "index.html"
}
function login(){
    event.preventDefault();
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    const bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

    for (let usuario of bancoDeDados) {
        if (user === usuario.cadUser && senha === usuario.cadSenha) {
            localStorage.setItem("usuarioLogado", user);
            window.location.href = "home.html";
            break;
        }    
    }
    
}
