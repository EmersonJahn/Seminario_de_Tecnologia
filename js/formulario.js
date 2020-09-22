
$(() => {
  mostraListaPalestras();
});

function mostraListaPalestras() {
  
  const carrinho = getCarrinho();
  
  const ulPalestras = $('ul#palestras');
  
  for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    
    const itemLista = document.createElement('li');
    
    itemLista.innerHTML = item;
    itemLista.classList.add('item-palestra-selecionada');
    
    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('btn', 'btn-sm', 'btn-danger');
    botaoRemover.innerHTML = 'Remover';
    botaoRemover.onclick = () => {
      removeDoCarrinho(item);
      ulPalestras.empty();
      mostraListaPalestras();
    };
    
    itemLista.appendChild(botaoRemover);
    
    ulPalestras.append(itemLista);
    
  }
  
}