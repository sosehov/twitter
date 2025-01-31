$(document).ready(function() {
  // Register the 'input' event on the textarea
  $('.new-tweet textarea').on('submit', function() {
    const maxLength = 140;
    const currentLength = $(this).value().length;
    if (currentLength === null || currentLength === '') {
      alert('Tweet can not be empty!');
    } else if (currentLength > maxLength) {
      alert('Tweet text can not exceed 140 characters!');
      }
  });
});