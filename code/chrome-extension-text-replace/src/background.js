// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function updateBadge(paused) {
  badge_text = paused ? "OFF" : "";
  chrome.browserAction.setBadgeText({text: badge_text});
}

function setPaused(paused) {
  localStorage.setItem('paused', paused);
  updateBadge(paused);
}

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
  state = localStorage.getItem('paused') == 'true'
  setPaused(!state);
  chrome.tabs.update(tab.id, {url: tab.url});
}

localStorage.setItem('paused', true);
updateBadge(localStorage.getItem('paused'));

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.name == "isPaused?")
    sendResponse({value: localStorage.getItem('paused')});
});