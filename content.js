// Função que busca a string e clica no último botão
function tryAutoClick() {
    const bodyText = document.body.innerText || "";
    if (!bodyText.includes("The server is busy. Please try again later.")) {
      return;
    }
  
    // Seleciona todos os botões com a classe ds-icon-button
    const buttons = Array.from(document.querySelectorAll(".ds-icon-button"));
    if (buttons.length === 0) {
      return;
    }
  
    // Pega o último e dispara o clique
    const lastButton = buttons[buttons.length - 1];
    lastButton.click();
    console.log("[Auto‑Clicker] Botão clicado automaticamente.");
  }
  
  // Observa mudanças no DOM para capturar atualizações dinâmicas
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.addedNodes.length || m.type === "childList") {
        tryAutoClick();
        break;
      }
    }
  });
  
  // Inicia observação
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Também tenta logo na carga inicial, caso o texto já esteja presente
  window.addEventListener("load", tryAutoClick);
  