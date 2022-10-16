/* 
    OBJETIVO - Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicaa pelo usuário e esconder o conteúdo da aba anterior.
    
    Passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML

    Passo 2 - Dar um jeito de identificar o clique no elemento da aba (Quando o usuário clicou na aba)

    Passo 3 - Quando o usuário clicar, desmarcar a aba selecionada

    Passo 4 - Marcar a aba clicada como selecionado

    Passo 5 - Esconder o conteúdo da aba anterior

    Passo 6 - Mostrar o conteúdo da aba selecionada
*/

// Passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

    // Passo 2 - Dar um jeito de identificar o clique no elemento da aba (Quando o usuário clicou na aba)
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")) {
            return;
        };

        selecionarAba(aba)
        
        esconderInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // Passo 3 - Quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // Passo 4 - Marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function esconderInformacoesDaAba(aba) {
    // Passo 5 - Esconder o conteúdo da aba anterior
    const infomacaoSelecionada = document.querySelector(".informacao.selecionado");
    infomacaoSelecionada.classList.remove("selecionado");

    // Passo 6 - Mostrar o conteúdo da aba selecionada
    const IdDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    
    const informacaoASerMostrada = document.getElementById(IdDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}