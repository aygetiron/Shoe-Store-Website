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
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }