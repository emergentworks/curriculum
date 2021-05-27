(function() {
  
  // collect the info for federal wage and state wages
  // last gathered from january 1 2018 data at https://www.dol.gov/whd/minwage/america.htm
  const federalWage = 7.25;
  const wages = [
    { name: 'Alabama', abbreviation: 'AL' }, 
    { name: 'Alaska', abbreviation: 'AK', wage: 9.84 }, 
    { name: 'Arizona', abbreviation: 'AZ', wage: 10.50 }, 
    { name: 'Arkansas', abbreviation: 'AR', wage: 8.5 }, 
    { name: 'California', abbreviation: 'CA', wage: 11 }, 
    { name: 'Colorado', abbreviation: 'CO', wage: 10.20 }, 
    { name: 'Connecticut', abbreviation: 'CT', wage: 10.10 }, 
    { name: 'Delaware', abbreviation: 'DE', wage: 8.25 }, 
    { name: 'District Of Columbia', abbreviation: 'DC', wage: 12.50 }, 
    { name: 'Florida', abbreviation: 'FL', wage: 8.25 }, 
    { name: 'Georgia', abbreviation: 'GA', wage: 5.15 }, 
    { name: 'Hawaii', abbreviation: 'HI', wage: 10.10 }, 
    { name: 'Idaho', abbreviation: 'ID', wage: federalWage }, 
    { name: 'Illinois', abbreviation: 'IL', wage: 8.25 }, 
    { name: 'Indiana', abbreviation: 'IN', wage: federalWage }, 
    { name: 'Iowa', abbreviation: 'IA', wage: federalWage }, 
    { name: 'Kansas', abbreviation: 'KS', wage: federalWage }, 
    { name: 'Kentucky', abbreviation: 'KY', wage: federalWage }, 
    { name: 'Louisiana', abbreviation: 'LA' }, 
    { name: 'Maine', abbreviation: 'ME', wage: 10 }, 
    { name: 'Maryland', abbreviation: 'MD', wage: 9.25 }, 
    { name: 'Massachusetts', abbreviation: 'MA', wage: 11 }, 
    { name: 'Michigan', abbreviation: 'MI', wage: 9.25  }, 
    { name: 'Minnesota', abbreviation: 'MN', wage: 9.65 }, 
    { name: 'Mississippi', abbreviation: 'MS' }, 
    { name: 'Missouri', abbreviation: 'MO', wage: 7.85 }, 
    { name: 'Montana', abbreviation: 'MT', wage: 8.30 }, 
    { name: 'Nebraska', abbreviation: 'NE', wage: 9 }, 
    { name: 'Nevada', abbreviation: 'NV', wage: 8.25 }, 
    { name: 'New Hampshire', abbreviation: 'NH', wage: federalWage }, 
    { name: 'New Jersey', abbreviation: 'NJ', wage: 8.60 }, 
    { name: 'New Mexico', abbreviation: 'NM', wage: 7.5 }, 
    { name: 'New York', abbreviation: 'NY', wage: 10.40 }, 
    { name: 'North Carolina', abbreviation: 'NC', wage: federalWage }, 
    { name: 'North Dakota', abbreviation: 'ND', wage: federalWage }, 
    { name: 'Ohio', abbreviation: 'OH', wage: 8.30 }, 
    { name: 'Oklahoma', abbreviation: 'OK', wage: federalWage }, 
    { name: 'Oregon', abbreviation: 'OR', wage: 10.25 }, 
    { name: 'Pennsylvania', abbreviation: 'PA', wage: federalWage }, 
    { name: 'Rhode Island', abbreviation: 'RI', wage: 10.10 }, 
    { name: 'South Carolina', abbreviation: 'SC' }, 
    { name: 'South Dakota', abbreviation: 'SD', wage: 8.85 }, 
    { name: 'Tennessee', abbreviation: 'TN' }, 
    { name: 'Texas', abbreviation: 'TX', wage: federalWage }, 
    { name: 'Utah', abbreviation: 'UT', wage: federalWage }, 
    { name: 'Vermont', abbreviation: 'VT', wage: 10.50 }, 
    { name: 'Virgin Islands', abbreviation: 'VI', wage: federalWage }, 
    { name: 'Virginia', abbreviation: 'VA', wage: federalWage }, 
    { name: 'Washington', abbreviation: 'WA', wage: 11.50 }, 
    { name: 'West Virginia', abbreviation: 'WV', wage: 8.75 }, 
    { name: 'Wisconsin', abbreviation: 'WI', wage: federalWage }, 
    { name: 'Wyoming', abbreviation: 'WY', wage: 5.15 },
  ];
  
  // get the form elements to listen for submission
  const submitButton = document.getElementById('submit');
  const validation = document.getElementById('validation');
  const results = document.getElementById('results');
  
  // the following code is run when the submit button is pressed
  submitButton.onclick = function(e) {
    
    // we do not collect the data, we just do the math client-side,
    // so we call preventDefault so that the data isn't sent anywhere and
    // the page isn't refreshed
    e.preventDefault();
    
    // get the form values
    const weeks = document.getElementById('weeks').value;
    const hours = document.getElementById('hours').value;
    const state = document.getElementById('state').value;
    
    // validate to make sure all the info was added to the form
    if (!weeks || !hours || !state) {
      validation.innerHTML = '<p class="error">You must enter all fields'
    }
    else {
      // if valid, we remove any existing warnings from past failure
      validation.innerHTML = '';
      
      // get the wage object for our state
      const stateObject = wages.filter(wage => wage.abbreviation === state)[0];
      if ( !stateObject ) {
        validation.innerHTML = '<p class="error">There seems to be no info for that state! Contact jenn@dotbiz.info for help!</p>';
        return;
      }
      
      // calculate the wage
      const wageString = ( stateObject.wage ) ? stateObject.wage.toFixed(2) : 'not required, so we will assume the federal minimum';
      stateObject.wage = ( stateObject.wage ) ? stateObject.wage : federalWage;
      
      const minimumWage = stateObject.wage * hours * weeks;
      
      const resultsString = `The federal minimum wage is <span class="federal">$${federalWage.toFixed(2)}</span>, ` + 
                              `but the minimum wage in <span class="state">${stateObject.name}</span> is <span class="wage">$${wageString}</span>.` +
                              `<p>Your minimum wage salary for the year (before taxes or overtime) would be <span class="total">$${minimumWage.toFixed(2)}</span></p>`; 
      results.innerHTML = resultsString;
    }
  }
})();
