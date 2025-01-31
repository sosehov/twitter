$(document).ready(function() {

  $('.tweet-form').on('submit', function(event) {
    const maxLength = 140;
    const tweetText = $('.new-tweet textarea').val();
    const currentLength = tweetText.length;

    // Clear any previous error messages
    $('.error-message').remove();

    if (!tweetText) {
      alert('Tweet can not be empty!');
      event.preventDefault();
    } else if (currentLength > maxLength) {
      alert('Tweet text can not exceed 140 characters!');
      event.preventDefault();
      }
  });
});