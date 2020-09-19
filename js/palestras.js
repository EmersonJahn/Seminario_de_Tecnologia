$(() => {
            
  $("#cursoSelect").change((event) => {
      const valFiltro = $("#cursoSelect").val();
      
      $("#container-dados .row.linha-principal").filter(() => {
          
          const curso = $(this)[0].children[3].children[1].innerHTML;
          
          if (valFiltro == 'Todos' || valFiltro === curso) {
              $(this).toggle(true);
          } else {
              $(this).toggle(false);
          }
          
      });
      
  });
  
});