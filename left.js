// Script para gerenciar as abas
function openTab(tabId) {
  // Esconde todas as abas
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove a classe ativa dos botões
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Ativa o conteúdo da aba clicada
  document.getElementById(tabId).classList.add('active');

  // Ativa o botão correspondente
  const button = document.querySelector(`.tab-button[onclick="openTab('${tabId}')"]`);
  if (button) button.classList.add('active');
}


// Script para alternar a visibilidade do conteúdo expansível
function toggleExpandable(contentId) {
  const content = document.getElementById(contentId);

  // Verifica se o conteúdo está visível e alterna
  if (content.style.display === "block") {
      content.style.display = "none"; // Esconde o conteúdo
  } else {
      content.style.display = "block"; // Exibe o conteúdo
  }
}

