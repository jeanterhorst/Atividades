class Usuario {
  public nome: string;
  public senha: number;
  public recados;
    constructor(nome: string, senha: number) {
      this.nome = nome,
      this.senha = senha;
      this.recados = new Array();
    }
  }
  function CriaNovoUsuario(nome:string, senha:number) {
    const usuario = new Usuario(nome, senha);
    localStorage.setItem('chave', JSON.stringify(usuario));
  }
  
  document.addEventListener("DOMContentLoaded", function (event) {
    const cadastro_Novo_usuario:any = document.querySelector("#cadNovoUsuario") as HTMLInputElement;
    const cadastro_Senha:any = document.querySelector("#cadSenha")as HTMLInputElement;
    const confir_nova_Senha = document.querySelector("#confirCadSenha")as HTMLInputElement;
    const label_usuario = document.querySelector("#label_usuario")as HTMLAnchorElement;
    const label_senha = document.querySelector("#label_senha")as HTMLAnchorElement;
    const label_confirmaSenha = document.querySelector("#label_confirmaSenha")as HTMLAnchorElement;
    const botaoCadastrar = document.querySelector("#btnCriaUsuario")as HTMLAnchorElement;
  
    window.addEventListener("keydown", function (e) {
      if (e.key == "Enter") {
        if (cadastro_Senha.value && cadastro_Novo_usuario == "") {
          label_usuario.setAttribute("style", "color: red");
          label_usuario.innerHTML = "Usuario: * Preencha com um usuario valido";
          label_senha.setAttribute("style", "color: red");
          label_senha.innerHTML = "Senha: * Preencha com uma senha valida";
        } else if (cadastro_Senha.value.length < 8) {
          label_senha.setAttribute("style", "color: red");
          label_senha.innerHTML = "Senha: * insira no minimo 8 caracteres";
        } else if (cadastro_Senha.value != confir_nova_Senha.value) {
          label_senha.setAttribute("style", "color: red");
          label_senha.innerHTML = "Senha: * as senhas nao conferem";
          label_confirmaSenha.setAttribute("style", "color: red");
          label_confirmaSenha.innerHTML = "Senha: * as senhas nao conferem";
        } else if (
          this.localStorage.getItem(cadastro_Novo_usuario.value) != null
        ) {
          label_usuario.setAttribute("style", "color: red");
          label_usuario.innerHTML = "Usuario: * Preencha com um usuario valido";
        } else {
          CriaNovoUsuario(cadastro_Novo_usuario.value, cadastro_Senha.value);
          window.location.href =
            "http://127.0.0.1:5500/avaliacao_front_end_%20%20%202/dist/pages/login.html";
        }
      }
    });
  
  botaoCadastrar.addEventListener("click", function (event){
      if (cadastro_Senha.value && cadastro_Novo_usuario == "") {
          label_usuario.setAttribute("style", "color: red");
          label_usuario.innerHTML = "Usuario: * Preencha com um usuario valido";
          label_senha.setAttribute("style", "color: red");
          label_senha.innerHTML = "Senha: * Preencha com uma senha valida";
        } else if (cadastro_Senha.value.length < 8) {
          label_senha.setAttribute("style", "color: red");
          label_senha.innerHTML = "Senha: * insira no minimo 8 caracteres";
        } else if (cadastro_Senha.value != confir_nova_Senha.value) {
          label_senha.setAttribute("style", "color: red");
          label_senha.innerHTML = "Senha: * as senhas nao conferem";
          label_confirmaSenha.setAttribute("style", "color: red");
          label_confirmaSenha.innerHTML = "Senha: * as senhas nao conferem";
        } else if (
          localStorage.getItem(cadastro_Novo_usuario.value) != null
        ) {
          label_usuario.setAttribute("style", "color: red");
          label_usuario.innerHTML = "Usuario: * Preencha com um usuario valido";
        } else {
          CriaNovoUsuario(cadastro_Novo_usuario.value, cadastro_Senha.value);
          window.location.href =
            "http://127.0.0.1:5500/avaliacao_front_end_%20%20%202/dist/pages/login.html";
        }
  })
  
  });
  