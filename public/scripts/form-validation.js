$(document).ready(function() {

  $('.tweet-form').on('submit', function(event) {
    event.preventDefault();

    const maxLength = 140;
    const tweetText = $('.new-tweet textarea').val();
    const currentLength = tweetText.length;

    // Clear any previous error messages
    $('.error-message').remove();

    if (!tweetText) {
      alert('Tweet can not be empty!');
    } else if (currentLength > maxLength) {
      alert('Tweet text can not exceed 140 characters!');
    } else {
      // If valid, trigger a custom event to submit the form
      $(this).trigger('validSubmit');
    }
  });
});