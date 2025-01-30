/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(()=> {

  // Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

  const renderTweets = function(tweets) {
    for(const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet); 
    }
  }

  const createTweetElement = function(tweet) {
    let tweet = $(`
      <article class="tweet">
        <header class="tweet-header">
          <br/>
          <img src="${tweet.user.avatars} alt="User's profile picture">
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

    return $tweet;
  };

  renderTweets(data);

});