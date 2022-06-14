"use strict";
let usuarioLogado = sessionStorage.getItem('usuario_Logado');
const session = localStorage.getItem("session");
console.log(usuarioLogado);
checkLogged();
function checkLogged() {
    if (session) {
        usuarioLogado = session;
    }
    if (!usuarioLogado) {
        window.location.href = "http://127.0.0.1:5500/avaliacao_front_end_%20%20%202/dist/pages/login.html";
        return;
    }
}
let logado = JSON.parse(localStorage.getItem('chave') || "");
function mostrarTabela() {
    const table = document.querySelector("#tbody");
    usuarioLogado = JSON.parse(localStorage.getItem('chave') || "");
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
function apagarLinha(posicao) {
    let usuario = JSON.parse(localStorage.getItem('chave') || "");
    if (confirm("Deseja realmente deletar esta mensagem?")) {
        usuario.recados.splice(posicao, 1);
        localStorage.setItem('chave', JSON.stringify(usuario));
    }
    return window.location.reload();
}
function preEditar(posicao) {
    const usuario = JSON.parse(localStorage.getItem('chave') || "");
    const novaDesc = document.querySelector("#descricaoRecados");
    const novoDet = document.querySelector("#detalhamentoRecados");
    usuario.recados[posicao].descricao = novaDesc.value;
    usuario.recados[posicao].detalhamento = novoDet.value;
}
function editarLinha(posicao) {
    const usuario = JSON.parse(localStorage.getItem('chave') || "");
    const novaDesc = usuario.recados[posicao].descricao;
    const novoDet = usuario.recados[posicao].detalhamento;
    const botaoAtualizar = document.querySelector("#botaoAtualizarRecados");
    const botaoSalvar = document.querySelector("#botaoSalvarRecados");
    document.querySelector("#descricaoRecados").value = novaDesc;
    document.querySelector("#detalhamentoRecados").value = novoDet;
    botaoAtualizar.style.display = "block";
    botaoSalvar.style.display = "none";
    botaoAtualizar.addEventListener("click", function (event) {
        if (confirm("Deseja realmente alterar esta mensagem?")) {
            usuario.recados.splice(posicao, 1);
            localStorage.setItem('chave', JSON.stringify(usuario));
            const descricaoNova = document.querySelector("#descricaoRecados");
            const detalhamentNovo = document.querySelector("#detalhamentoRecados");
            addMensagem('chave', descricaoNova.value, detalhamentNovo.value);
            mostrarTabela();
            resetarInputs();
            botaoAtualizar.style.display = "none";
        }
        return resetarInputs(), window.location.reload();
    });
}
//---------------------------
function addMensagem(chave, desc, det) {
    usuarioLogado = JSON.parse(localStorage.getItem('chave') || "");
    usuarioLogado.recados.push({
        descricao: desc,
        detalhamento: det,
    });
    localStorage.setItem('chave', JSON.stringify(usuarioLogado));
}
const botaoSalvar = document.querySelector("#botaoSalvarRecados");
botaoSalvar.addEventListener("click", function (event) {
    const descricaoNova = document.querySelector("#descricaoRecados");
    const detalhamentoNovo = document.querySelector("#detalhamentoRecados");
    addMensagem(logado, descricaoNova.value, detalhamentoNovo.value);
    mostrarTabela();
    resetarInputs();
    alert("Mensagem salva com sucesso!");
});
function resetarInputs() {
    document.querySelector("#descricaoRecados").value = "";
    document.querySelector("#detalhamentoRecados").value = "";
}
document.querySelector('#btn_sair').addEventListener("click", () => {
    sessionStorage.removeItem('usuario_logado');
    localStorage.removeItem('session');
    window.location.href = "http://127.0.0.1:5500/avaliacao_front_end_%20%20%202/dist/pages/login.html";
    return;
});
