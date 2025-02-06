$(document).ready(function() {
  
  // Register the 'input' event on the textarea
  $('#tweet-text').on('input', function() {

    const maxLength = 140;
    const currentLength = $(this).val().length;
    const remainingLength = maxLength - currentLength;
    console.log(remainingLength);
    // Find the counter relative to the textarea
    const $counter = $(this).closest('.new-tweet').find('.counter');

    // Set the text content of counter element
    $counter.text(remainingLength);

    // Check if remaining length is negative
    if (remainingLength < 0) {
      $counter.addClass('over-limit');
    } else {
      $counter.removeClass('over-limit');
    }
  });
});