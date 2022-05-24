document.querySelector("#btnEntrar").addEventListener("click", (e) => {
  e.preventDefault();

  logar();
});
let usuarios = [];
function logar() {
  let inUsuario = document.querySelector("#nome");
  let inSenha = document.querySelector("#senha");

  

  usuarios = JSON.parse(localStorage.getItem("chave"));
  console.log(usuarios)
if(usuarios === null){
  alert("Usuario nao cadastrado, siga para a pagina de cadastros")
}

  if (usuarios.nome === inUsuario.value && usuarios.senha === inSenha.value) {
    saveSession(inUsuario);
    window.location.href =
      "http://127.0.0.1:5500/front%20end%201/html/pageRecados.html";
  } else {
    alert("login ou senha invalidos");
  }
}

function saveSession(){
  if(saveSession){
    localStorage.setItem('session', usuarios.nome)
  }
  sessionStorage.setItem('usuario_logado', JSON.stringify( usuarios.nome))
}
