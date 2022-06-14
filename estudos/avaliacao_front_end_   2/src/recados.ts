

let usuarioLogado:any = sessionStorage.getItem( 'usuario_Logado')!;
const session = localStorage.getItem("session")
console.log(usuarioLogado)

checkLogged();

function checkLogged(){
if(session){
  
  usuarioLogado = session;
}
if(!usuarioLogado){
  window.location.href = "http://127.0.0.1:5500/avaliacao_front_end_%20%20%202/dist/pages/login.html"
  return;

}

}


let logado = JSON.parse(localStorage.getItem('chave')||"")

function mostrarTabela() {
  const table = document.querySelector("#tbody") as HTMLAnchorElement;
  usuarioLogado = JSON.parse(localStorage.getItem('chave')||"");

  table.innerHTML = "";

  for (let i = 0; i < usuarioLogado.recados.length; i++) {
    table.innerHTML +=
      "<tr>" +
      `<th id="linha" scope="row">${i}</th>` +
      `<td>${usuarioLogado.recados[i].descricao}</td>` +
      `<td>${usuarioLogado.recados[i].detalhamento}</td>` +
      `<td> <img type="button" src="../assets/images/edit.svg" onclick="editarLinha(${i})"/> <img type="button" src="../assets/images/delet.svg" onclick="apagarLinha(${i})"/> </td>` +
      "</tr>";
  }
}

mostrarTabela();

function apagarLinha(posicao:any) {
  let usuario = JSON.parse(localStorage.getItem('chave')||"");
  if (confirm("Deseja realmente deletar esta mensagem?")) {
    usuario.recados.splice(posicao, 1);
    localStorage.setItem('chave', JSON.stringify(usuario));
  }
  return window.location.reload();
}

function preEditar(posicao:any) {
  const usuario = JSON.parse(localStorage.getItem('chave')||"");
  const novaDesc = document.querySelector("#descricaoRecados") as HTMLInputElement;
  const novoDet = document.querySelector("#detalhamentoRecados")as HTMLInputElement;

  usuario.recados[posicao].descricao = novaDesc.value;
  usuario.recados[posicao].detalhamento = novoDet.value;
}

function editarLinha(posicao:any) {
  const usuario = JSON.parse(localStorage.getItem('chave')||"");
  const novaDesc = usuario.recados[posicao].descricao;
  const novoDet = usuario.recados[posicao].detalhamento;
  const botaoAtualizar = document.querySelector("#botaoAtualizarRecados") as HTMLAnchorElement;
  const botaoSalvar = document.querySelector("#botaoSalvarRecados") as HTMLAnchorElement;
  (document.querySelector("#descricaoRecados")as HTMLInputElement).value = novaDesc;
  (document.querySelector("#detalhamentoRecados")as HTMLInputElement).value = novoDet;
  botaoAtualizar.style.display = "block";
  botaoSalvar.style.display = "none";

  botaoAtualizar.addEventListener("click", function (event) {
    if (confirm("Deseja realmente alterar esta mensagem?")) {
      usuario.recados.splice(posicao, 1);
      localStorage.setItem('chave', JSON.stringify(usuario));
      const descricaoNova = document.querySelector("#descricaoRecados") as HTMLInputElement;
      const detalhamentNovo = document.querySelector("#detalhamentoRecados") as HTMLInputElement;

      addMensagem('chave',descricaoNova.value, detalhamentNovo.value );
      mostrarTabela();
      resetarInputs();

      botaoAtualizar.style.display = "none";
    }
    return resetarInputs(), window.location.reload();
  });
}

//---------------------------

function addMensagem( chave:any, desc:string, det:string) {
  usuarioLogado = JSON.parse(localStorage.getItem('chave')||"");

  usuarioLogado.recados.push({
    descricao: desc,
    detalhamento: det,
  });

  localStorage.setItem('chave', JSON.stringify(usuarioLogado));
}
const botaoSalvar = document.querySelector("#botaoSalvarRecados") as HTMLButtonElement;
botaoSalvar.addEventListener("click", function (event) {
  const descricaoNova = document.querySelector("#descricaoRecados") as HTMLInputElement;
  const detalhamentoNovo = document.querySelector("#detalhamentoRecados") as HTMLInputElement;

  addMensagem(logado, descricaoNova.value, detalhamentoNovo.value);
  mostrarTabela();
  resetarInputs();
  alert("Mensagem salva com sucesso!");
});

function resetarInputs() {
  (document.querySelector("#descricaoRecados") as HTMLInputElement).value = "";
  (document.querySelector("#detalhamentoRecados") as HTMLInputElement).value = "";
}

  (document.querySelector('#btn_sair') as HTMLButtonElement).addEventListener("click", () =>{
    sessionStorage.removeItem('usuario_logado');
    localStorage.removeItem('session');
    window.location.href = "http://127.0.0.1:5500/avaliacao_front_end_%20%20%202/dist/pages/login.html"
  return;


  })
 