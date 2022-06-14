


let btnEntrar = document.querySelector("#btnEntrar") as HTMLButtonElement;

btnEntrar.addEventListener("click", (e) => {
    e.preventDefault();
  
    logar();
  });

  function logar() {
    let inUsuario = document.querySelector("#nome") as HTMLInputElement;
    let inSenha = document.querySelector("#senha") as HTMLInputElement;
  
    console.log(inUsuario.value)
  
    let usuarios  = JSON.parse(localStorage.getItem("chave")||"{}");
   console.log(usuarios.nome)
  if(inUsuario.value == "" || inSenha.value == ""){
    alert("Preencha os campos de usuario e senha")
  }
   else if(inUsuario.value != usuarios.nome){
    alert("usuario não cadastrado")
  }
  else if (usuarios.nome == inUsuario.value && usuarios.senha == inSenha.value) {
      saveSession(inUsuario);
      window.location.href =
        "http://127.0.0.1:5500/avaliacao_front_end_%20%20%202/dist/pages/pageRecados.html";
    } else {
      alert("login ou senha invalidos");
    }
  }
  
  function saveSession(usuario:any){
    if(usuario){
      localStorage.setItem('session', usuario)
    }
    sessionStorage.setItem('usuario_logado', JSON.stringify( usuario))
  }
  