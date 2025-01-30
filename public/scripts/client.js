/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(()=> {

  const createTweetElement = function(tweet) {
    let tweetElement = $(`
      <article class="tweet">
        <header class="tweet-header">
          <br/>
          <img src="${tweet.user.avatars}" alt="User's profile picture">
          <h3>${tweet.user.name}</h3>
          <h3>${tweet.user.handle}</h3>
        </header>
          <p>${tweet.content.text}</p>
          <hr/>
          <footer>
            <h5>${tweet.created_at}</h5>
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
    for(const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.prepend($tweet); 
    }
  }

  const loadTweets = () => {
    // Make a GET request for the tweet data from the server
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: (data) => {
        renderTweets(data);
      }
    });
  };

  loadTweets();

  // Grab the button from the HTML
  const $submitTweetButton = $('.container-submit button');

  $submitTweetButton.on("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // get the info from the form
    const data = $submitTweetButton.serialize();

    // Post the form data to the server
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data,
      success: () => {
        console.log('The tweet has been posted to the server');
      }
    });
  });

});
