// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

  var filterBtns =  $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
        $(this).removeClass('active-filter-btn');
    });
  }
 // Get all quantity inputs and buttons
 const quantityInputs = document.querySelectorAll('.quantity-input');
 const minusButtons = document.querySelectorAll('.minus-btn');
 const plusButtons = document.querySelectorAll('.plus-btn');

 // Add click event listener to minus buttons
 minusButtons.forEach(button => {
   button.addEventListener('click', () => {
     // Get the quantity input associated with this button
     const quantityInput = button.nextElementSibling;
     // Decrement the quantity if it's greater than the minimum value
     if (quantityInput.value > quantityInput.min) {
       quantityInput.value--;
     }
   });
 });

 // Add click event listener to plus buttons
 plusButtons.forEach(button => {
   button.addEventListener('click', () => {
     // Get the quantity input associated with this button
     const quantityInput = button.previousElementSibling;
     // Increment the quantity if it's less than the maximum value
     if (quantityInput.value < quantityInput.max) {
       quantityInput.value++;
     }
   });

 });