function runSwitchjs() {
  chrome.tabs.executeScript({
    file: 'switch.js'
  });
}

document.getElementById('clickme').addEventListener('click', runSwitchjs);