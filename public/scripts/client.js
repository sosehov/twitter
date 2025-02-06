$(document).ready(()=> {
  
  // Handle the toggle functionality
  $('.toggle-tweet-form').on('click', function() {
    const $newTweetSection = $('.new-tweet');
    const $button = $(this);

    // If the form is visible, slide it up (hide it), otherwise slide it down (show it)
    if ($newTweetSection.is(':visible')) {
      $newTweetSection.slideUp('slow');

    } else {
      // Slide down the form
      $newTweetSection.slideDown('slow', function() {
        // Automatically focus the textarea once the form is revealed
        $('#tweet-text').focus();
      });
    }
  });

  const createTweetElement = function(tweet) {
    // Manually escape the tweet content to avoid issues with jQuery
    const tweetText = document.createElement('div');
    tweetText.textContent = tweet.content.text;
    const escapedText = tweetText.innerHTML;

    // Build the tweet element with the escaped tweet text
    let tweetElement = $(`
      <article class="tweet">
        <header class="tweet-header">
          <br/>
          <img src="${tweet.user.avatars}" alt="User's profile picture">
          <h3 class="username">${tweet.user.name}</h3>
          <h3 class="userhandle">${tweet.user.handle}</h3>
        </header>
        <p>${escapedText}</p>
        <hr/>
        <footer>
          <h5>${timeago.format(tweet.created_at)}</h5>
          <span class="clickable-icon">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </span>
        </footer>
      </article>
    `);

    return tweetElement;
  };

  // Grab the twitter container from the webpage
  const $tweetsContainer = $('#tweets-container');

  const renderTweets = function(tweets) {
    $tweetsContainer.empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.prepend($tweet);
    }
  };

  // Fetch tweets from the http://localhost:8080/tweets page
  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: (data) => {
        renderTweets(data);
      }
    });
  };

  loadTweets();

  const $tweetForm = $('.tweet-form');

  $tweetForm.on('validSubmit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    $('.error-container').hide(); // Hide the error container

    // Get the info from the form
    const data = $tweetForm.serialize();

    // Post the form data to the server
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data,
      success: () => {
        loadTweets(); //Reload tweets after successful submission
        $('#tweet-text').val('').trigger('input');
        $('.error-container').empty();
      }
    });
  });

});