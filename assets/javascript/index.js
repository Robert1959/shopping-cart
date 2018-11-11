$(document).ready(function() {

    var productList = [
      {fruit: 'peaches'},
      {vegetables: 'onions'},
      {candy: 'snickers'},
    ];

    var shoppingCart = [];
  // DYNAMICALLY CREATE BUTTONS
  
    const render = function() {
      for( let i = 0; i < productList.length; i++ ) {
        const button = $('<button>');
        button.addClass('button');
        button.attr('data',Object.values(productList[i])); 
        button.text(Object.values(productList[i]));
        $('#buttons').append(button);
      }
    }
    
    render();

  
    // ATTACH ON-CLICK EVENTS TO BUTTONS
    
    const appendTask = function() {
      const productName = $(this).attr("data");
      if (shoppingCart.includes(productName)){
        $('#warning').css('visibility', 'visible');
        $('.button').css({'background-color': 'rgb(216, 216, 216)', 'color': 'white'});
        $('.button').prop('disable',1000) 
        setTimeout(function(){
          $('p:warning').css('visibility', 'hidden')
          $('.button').css({'color':'rgb(120, 25, 25)', 'background-color': 'buttonface'});
          $('.button').prop('disabled',false)
        },1000);
      }
      else {
        shoppingCart.push(productName);
      const task = $('<div>').addClass('proj task-color');
      task.text($(this).attr("data"));
      $('#display').append(task);
      }  
    }
    $('#buttons').on('click', '.button', appendTask)
  
    // "CLEAR" BUTTON
   
    const clear = function() {
      $('#display').empty();
      shoppingCart = []; 
    }
    $('#clear').on('click', clear);
  
    //"Filter" button
   
    window.onclick = function () {
      if (event.target.matches('#dropdownMenu')) {
        var dropdown = document.getElementsByClassName("dropdown-value");
        var i;
        for (i = 0; i < dropdown.length; i++) {
          var openDropdown = dropdown[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
    }
   }
  }
 }
  
    $("#filter").on("click", function () {
      let selected = $("#myDropdown option:selected").val();
      render(selected);
    });
   
  });
