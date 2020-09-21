$(() => {
            
  $("#cursoSelect").change((event) => {
      const valFiltro = $("#cursoSelect").val();
      
      $("#container-dados .row.linha-principal").each((index, element) => {
        
        const curso = $(element)[0].children[3].children[1].innerHTML;
        
        $(element).collapse({ toggle: false });
        
        if (valFiltro == 'Todos' || valFiltro === curso) {
            $(element).toggle(true);
        } else {
            $(element).toggle(false);
        }
        
      });
      
  });
  
});