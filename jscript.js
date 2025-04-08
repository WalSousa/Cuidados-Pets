
function mostraGaleria(){ 
    let imagens = ['img/labrador.jpg', 'img/grt.jpg', 'img/poodle.jpeg', 'img/bul-engl.jpg', 'img/pa.jpg']; 
    let galeria = document.getElementById('galeria'); 
    imagens.forEach(img=>{ 
        let imgElement =  document.createElement('img'); 
        imgElement.src = '../'+img; 
        
    galeria.appendChild(imgElement); 
    }); 
} 
document.onload = mostraGaleria(); 
 
function exibirRaca(raca){ 
 
    let info = { 
        'Labrador': 'Amigável, inteligente e energético.', 
        'Golden': 'Amigável e afetuoso que adora brincar',
        'Poodle': 'Inteligente, leal e fácil de treinar.', 
        'Buldog': 'Extremamente inteligente e ativo' ,
        'Pastor Alemão': 'Inteligente e corajos e frequentemente usado como cão policial ou de guarda'
    }; 
    
document.getElementById('infoRaca').innerText=info[raca]; 
} 

function pesquisarRaca() {
    const input = document.getElementById('campoPesquisa').value.toLowerCase();
    const resultado = document.getElementById('resultadoPesquisa');
  
    // Limpa os campos
    resultado.innerHTML = '';

    const racas = [
      { nome: 'labrador', imagem: 'img/labrador.jpg', descricao: 'Labrador Retriever: amigável, leal e inteligente.' },
      { nome: 'golden', imagem: 'img/grt.jpg', descricao: 'Golden Retriever: amigável e afetuoso.' },
      { nome: 'poodle', imagem: 'img/poodle.jpeg', descricao: 'Poodle: inteligente e brincalhão.' },
      { nome: 'bulldog', imagem: 'img/bul-engl.jpg', descricao: 'Bulldog Inglês: tranquilo e de baixa energia.' },
      { nome: 'pastor', imagem: 'img/pa.jpg', descricao: 'Pastor Alemão: inteligente e corajoso.' }
    ];
    const resultadosFiltrados = racas.filter(raca => raca.nome.includes(input));

    // Exibe os resultados
    if (resultadosFiltrados.length > 0) {
      resultadosFiltrados.forEach(raca => {
        const coluna = document.createElement('div');
        coluna.classList.add('coluna');
        coluna.innerHTML = `
          <img src="${raca.imagem}" alt="Foto do ${raca.nome}" />
          <h3>${raca.nome.charAt(0).toUpperCase() + raca.nome.slice(1)}</h3>
          <p>${raca.descricao}</p>
        `;
        resultado.appendChild(coluna);
      });
    } else {
      resultado.innerHTML = '<p>Nenhuma raça encontrada.</p>';
    }
}