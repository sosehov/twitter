$(document).ready(function() {
  // Register the 'input' event on the textarea
  $('.new-tweet textarea').on('input', function() {
    const maxLength = 140;
    const currentLength = $(this).val().length;

    // Update the counter
    $('.counter').text(maxLength - currentLength);
  });

});