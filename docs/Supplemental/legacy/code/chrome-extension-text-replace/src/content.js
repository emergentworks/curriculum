  (function() {
    function replaceWord() {
        // Get all tweets
        /* Twitter gives all tweets the classname `tweet-text` so   
         * document.querySelectorAll is getting all the tweets on the page.
         * [].slice.call is converting the list of tweets into an array we can go        * through
         */
        var tweetContent = [].slice.call(document.querySelectorAll('.tweet-text')); 

        // Then go through all tweet and replace 'females' with 'women'
        tweetContent.forEach(function(tweet){
          var newContent = tweet.innerHTML.replace(/females/g, 'women'); // females be doing 

          // If the new content is not the same as the old, then replace
          if (newContent != tweet.innerHTML) { 
            tweet.innerHTML = newContent;
          }
        });
      }
    
      chrome.runtime.sendMessage({name: "isPaused?"}, function(response) {
        if (response.value != 'true') { // If it's not paused replace!!
          replaceWord();

          document.body.addEventListener('DOMNodeInserted', function(event) {
              replaceWord(event.target);
          });
        }
      });

  })();
