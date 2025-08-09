// Lista de imagens
const imagens = [
  '/src/assets/imgs/ChatGPT\ Image\ 9\ de\ ago.\ de\ 2025\,\ 08_57_57.png',
  '/src/assets/imgs/ChatGPT\ Image\ 9\ de\ ago.\ de\ 2025\,\ 08_58_41.png',
  '/src/assets/imgs/ChatGPT\ Image\ 9\ de\ ago.\ de\ 2025\,\ 09_21_57.png'
];

let indice = 0;
const hero = document.querySelector('.hero');

// Função para trocar a imagem
function trocarImagem() {
  hero.style.backgroundImage = `url('${imagens[indice]}')`;
  indice = (indice + 1) % imagens.length; // volta ao início
}

// Troca a cada 5 segundos
trocarImagem(); // define a primeira
setInterval(trocarImagem, 3000);