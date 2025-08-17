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


// Formulário de contato

const botaoContt = document.getElementsByClassName('btn-contato-form')[0];
const botaoContt1 = document.getElementsByClassName('btn-contato-form1')[0];
const botaoClose = document.getElementsByClassName('icon_x')[0];
const forms = document.getElementsByClassName('hero-form')[0];

botaoContt.addEventListener("click", () => {
  forms.classList.add('ativo');
  forms.style.opacity = '1';
  forms.style.transform = 'translateY(0)';
});

botaoContt1.addEventListener("click", () => {
    forms.classList.add('ativo');
    forms.style.opacity = '1';
    forms.style.transform = 'translateY(0)';
});

botaoClose.addEventListener("click", () => {
  forms.style.opacity = '0';
  forms.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    forms.classList.remove('show');
  }, 400);
});


/* SLIDE ESTRUTURA */
const imagenEstru = [
  '/src/assets/imgs/recepcao.png',
  '/src/assets/imgs/Area_Kids.png',
  '/src/assets/imgs/RaioX.png',
  '/src/assets/imgs/consultório.png',
  '/src/assets/imgs/corredor.png'
];

let indiceEstru = 0;
const Estru = document.querySelector('.estrutura-image');

// Função para trocar a imagem
function trocarImagem1() {
  Estru.style.backgroundImage = `url('${imagenEstru[indiceEstru]}')`;
  indiceEstru = (indiceEstru + 1) % imagenEstru.length; // volta ao início
}

// Troca a cada 5 segundos
trocarImagem1(); // define a primeira
setInterval(trocarImagem1, 4000);


const minImg1 = document.querySelector('.minImg1');
const minImg2 = document.querySelector('.minImg2');
const minImg3 = document.querySelector('.minImg3');
const minImg4 = document.querySelector('.minImg4');
const minImg5 = document.querySelector('.minImg5');

minImg1.addEventListener('click', () =>{
  Estru.style.backgroundImage = `url('/src/assets/imgs/recepcao.png')`
})
minImg2.addEventListener('click', () => {
  Estru.style.backgroundImage = `url(${imagenEstru[1]})`;
});

minImg3.addEventListener('click', () => {
  Estru.style.backgroundImage = `url(${imagenEstru[2]})`;
});

minImg4.addEventListener('click', () => {
  Estru.style.backgroundImage = `url(${imagenEstru[3]})`;
});

minImg5.addEventListener('click', () => {
  Estru.style.backgroundImage = `url(${imagenEstru[4]})`;
});

