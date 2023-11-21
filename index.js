document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
    
      event.preventDefault();

      
      let dobInput = document.getElementById('dob').value;
      let dobDate = new Date(dobInput);
      let today = new Date();
      let minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
      let maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

      
      if (dobDate >= minDate && dobDate <= maxDate) {
        
        
        console.log('Form submitted successfully!');
        console.log('Name:', document.getElementById('name').value);
        console.log('Email:', document.getElementById('email').value);
        console.log('Password:', document.getElementById('password').value);
        console.log('Dob:', dobInput);
        console.log('Accepted terms?', document.getElementById('acceptedTerms').checked);

        
        
      } else {
        
        alert('Invalid date of birth. Please enter a date between 18 and 55 years ago.');
      }
    });
  });