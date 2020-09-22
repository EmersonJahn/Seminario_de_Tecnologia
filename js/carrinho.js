
const carrinho = [];

carregaCarrinho();


function getCarrinho() {
  return carrinho;
}

function adicionaAoCarrinho(string) {
  
  if (estaNoCarrinho(string)) {
    return;
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

function estaNoCarrinho(string) {
  
  for (const item of carrinho) {
    if (item === string) {
      return true;
    }
  }
  
  return false;
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
