const imagem = (largura, altura) => largura > altura ? true : false;
console.log(`A imagem está no modo paisagem? ${imagem(1920, 1080)}.`);