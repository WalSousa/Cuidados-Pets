
function mostraGaleria(){ 
    let imagens = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg','dog4.jpg','dog5.jpg']; 
    let galeria = document.getElementById('galeria'); 
    imagens.forEach(img=>{ 
        let imgElement =  document.createElement('img'); 
        imgElement.src = '../'+img; 
        
galeria.appendChild(imgElement); 
    }); 
} 
document.onload=mostraGaleria(); 
 
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
function pesquisarRaca(){ 
    let pesquisa = document.getElementById('campoPesquisa').value.toLowerCase(); 
    let racas= ['labrador', 'bulldog', 'puddle']; 
    let resultado = racas.includes(pequisa)?'Raça encontrada!':'Raça não encontrada' ; 
    document.getElementById('resultadoPesquisa').innerText = resultado; 
}
