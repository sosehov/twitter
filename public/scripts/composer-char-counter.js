$(document).ready(function() {
  // Register the 'input' event on the textarea
  $('.new-tweet textarea').on('input', function() {
    const maxLength = 140;
    const currentLength = $(this).val().length;
    const remainingLength = maxLength - currentLength;

    // Update the counter
    $('.counter').text(remainingLength);

    // Check if remaining length is negative
    if (remainingLength < 0) {
      $('.counter').addClass('over-limit');
    } else {
      $('.counter').removeClass('over-limit');
    }
    });
  });