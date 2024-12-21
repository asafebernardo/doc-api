// Script para gerenciar as abas
function openTab(tabId) {
  // Esconde todas as abas e remove a classe "active"
  const allTabs = document.querySelectorAll('.aba-container');
  allTabs.forEach(tab => tab.classList.remove('active'));

  // Remove a classe "active" de todos os botões de abas
  const allButtons = document.querySelectorAll('.aba');
  allButtons.forEach(button => button.classList.remove('active'));

  // Exibe a aba correspondente e adiciona a classe "active"
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
      targetTab.classList.add('active');
  }

  // Adiciona a classe "active" ao botão correspondente
  const correspondingButton = document.querySelector(`.aba[onclick="openTab('${tabId}')"]`);
  if (correspondingButton) {
      correspondingButton.classList.add('active');
  }
}
// Script para alternar a visibilidade do conteúdo expansível
function toggleExpandable(contentId) {
  const content = document.getElementById(contentId);

  // Verifica se o conteúdo tem a classe 'active' e alterna
  content.classList.toggle('active');
}

function toggleFolder(buttonElement) {
  const textElement = buttonElement.querySelector('.txt_interno_folder');
  if (textElement) {
    textElement.classList.toggle('open');
  }
}


