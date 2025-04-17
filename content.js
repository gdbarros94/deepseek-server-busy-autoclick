function tryAutoClick() {
    // 1. Confere se a mensagem de erro está presente
    if (!document.body.innerText.includes("The server is busy. Please try again later.")) {
      return;
    }
  
    // 2. Seleciona o contêiner específico de ícones de regenerar
    const flexContainer = document.querySelector("div.ds-flex._965abe9");
    if (!flexContainer) return;
  
    // 3. Extrai o primeiro ícone dentro do container (o refresh)
    const [refreshBtn] = flexContainer.querySelectorAll("div.ds-icon-button");
    if (!refreshBtn) return;
  
    // 4. Dispara o clique
    refreshBtn.click();
    console.log("[Auto‑Clicker] Botão 'Regenerar' clicado.");
  }
  
  window.addEventListener("load", () => {
    setTimeout(() => {
      tryAutoClick();
      intervalId = setInterval(tryAutoClick, 3000);
    }, 2000);
  });
  