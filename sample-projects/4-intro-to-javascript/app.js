/* our javascript! */

// when the window has loaded our javascript is ready to go
window.onload = function(){
  
  /* 
    our tasks:
      1. get the current date from the browser
      2. format the date to look normal to humans
      3. instead of "today" on index.html, have it show the date
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
};