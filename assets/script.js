// Selecionando elementos
const btn = document.querySelector('button');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex');

// Adicionando evento de clique no botão
btn.addEventListener('click', generateColors);

function generateColors() {
  for (let i = 0; i < color.length; i++) {
    // Gerando cores aleatórias
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Adicionar as cores como background
    color[i].style.backgroundColor = "#" + randomColor;

    // Adicionando a animação
    color[i].classList.add('fade-in');
    setTimeout(() => color[i].classList.remove('fade-in'), 400);

    // Adicionando o código hex encima da cor
    hex[i].innerHTML = "#" + randomColor;}}