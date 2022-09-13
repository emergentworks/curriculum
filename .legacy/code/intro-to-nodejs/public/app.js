/* our javascript! */

// when the window has loaded our javascript is ready to go
window.onload = function(){
  
  /* 
    our tasks:
      1. get the current date from the browser
      2. format the date to look normal to humans
      3. instead of "today" on index.html, have it show the date
      
      new steps:
      4. get our resolutions data from the server
      5. set our status to yes or no based on if there are updates for  each day so far
  */
  
  
  // 1. get the current date from the browser
  const date = new Date();
  
  // 2. format the date to look normal to humans
  const monthIndex = date.getMonth(); // returns month 0-11
  
  // we need to create an array of strings for 
  // each month name so we can format the entire date nicely
  // so months[0] is 'January' and months[11] is 'December'
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  const day = date.getDate(); // returns day of the month 1-31
  const year = date.getFullYear(); // returns the 4-digit year
  
  // we concatenate strings so we get one nice long one
  const dateString = months[monthIndex] + ' ' + day + ', ' + year;

  // 3. instead of "today" on index.html, have it show the date
  const dateElement = document.getElementById('date');
  dateElement.innerHTML = dateString;
  
  // 4. get our resolutions data from the server
  
  // first we create a function to call when we request and get data
  const resolutionsRequestListener = function() {
    
    // 5. set our status to yes or no based on if there are updates for  each day so far
    const resolutionsData = JSON.parse(this.responseText);
    
    // if we have the same number of objects as the days that have gone by,
    // it's a safe assumption that we are keeping our resolution
    const statusElement = document.getElementById('status');
    
    if ( resolutionsData.length == day ) {
      statusElement.innerHTML = 'yes!'; 
    }
    else {
      statusElement.innerHTML = 'no';
    }
      
  }

  // then we make a request to our server for the data. when successful, the
  // above resolutionsRequestListener will be called!
  const resolutionsRequest = new XMLHttpRequest();
  resolutionsRequest.addEventListener('load', resolutionsRequestListener);
  resolutionsRequest.open('get', '/resolution-data');
  resolutionsRequest.send();
};