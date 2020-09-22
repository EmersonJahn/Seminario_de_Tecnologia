
const carrinho = [];

carregaCarrinho();



function adicionaAoCarrinho(string) {
  
  for (const item of carrinho) {
    if (item === string) {
      return;
    }
  }
  
  carrinho.push(string);
  
  salvaCarrinho();
}

function removeDoCarrinho(string) {
  
  for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    
    if (item === string) {
      carrinho.splice(i, 1);
      break;
    }
    
  }
  
  salvaCarrinho();
}

function salvaCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregaCarrinho() {
  
  const carrinhoString = localStorage.getItem('carrinho');
  
  if (carrinhoString) {
    const itens = JSON.parse(carrinhoString);
    carrinho.push( ...itens );
  }
  
}
