/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(()=> {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const createTweetElement = function(tweetData) {
    const tweet = $(`
      <article class="tweet">
        <header class="tweet-header">
          <br/>
          <img src="${user.avatars} alt="User's profile picture">
          <h3>${user.name}</h3>
          <h3>${user.handle}</h3>
        </header>
          <p>${content.text}</p>
          <hr/>
          <footer>
            <h5>${created_at}</h5>
            <span class="clickable-icon">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </span>
          </footer>
        </article>
    `);

    return $tweet;
  };

  const $tweet = createTweetElement(tweetData);

  console.log($tweet);
  $('#tweets-container').append($tweet); 

});