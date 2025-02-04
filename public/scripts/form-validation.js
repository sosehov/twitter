$(document).ready(function() {

  $('.tweet-form').on('submit', function(event) {
    event.preventDefault();

    const maxLength = 140;
    const tweetText = $('.new-tweet textarea').val();
    const currentLength = tweetText.length;

    // Clear any previous error messages
    $('.error-container').empty();

    // Create an error message element
    const errorMessage = $('<p class="error-message"></p>');

    if (!tweetText) {
      errorMessage.text('Please enter some text to tweet!');
      $('.error-container').append(errorMessage);
    } else if (currentLength > maxLength) {
      errorMessage.text('Tweet cannot exceed 140 characters!');
      $('.error-container').append(errorMessage);
    } else {
      // If valid, trigger a custom event to submit the form
      $(this).trigger('validSubmit');
    }
  });
});