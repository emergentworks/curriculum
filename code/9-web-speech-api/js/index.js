// get navigation links
var allLinks = document.getElementsByTagName('a');
// get last word said element
var strongEl = document.getElementById('latest-word');

// new instance of speech recognition
var recognition = new webkitSpeechRecognition();
// set params
recognition.continuous = true;
recognition.interimResults = true;
recognition.start();

recognition.onresult = function(event){
  
  // delve into words detected results & get the latest
  // total results detected
  var resultsLength = event.results.length -1 ;
  // get length of latest results
  var ArrayLength = event.results[resultsLength].length -1;
  // get last word detected
  var saidWord = event.results[resultsLength][ArrayLength].transcript;
  
  // loop through links and match to word spoken
  for (i=0; i<allLinks.length; i++) {
    
    // get the word associated with the link
    var dataWord = allLinks[i].dataset.word;
    
    // if word matches chenge the colour of the link
    if (saidWord.indexOf(dataWord) != -1) {
      allLinks[i].style.color = 'red';
    }
  }
  
  // append the last word to the bottom sentence
  strongEl.innerHTML = saidWord;
}

// speech error handling
recognition.onerror = function(event){
  console.log('error?');
  console.log(event);
}