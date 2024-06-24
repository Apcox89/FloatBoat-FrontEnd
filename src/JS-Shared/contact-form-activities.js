function handleSubmit(event) { 
    let contactForm = document.getElementById('contactForm');
    if (!form.checkValidity()) {
          event.preventDefault(); 
          alert('Please fill out all required fields.');
          //other validation as needed...
      } else {
          window.location.href = 'Submit.html'; // 
      }
  }
  
  function calculateTotal() {
    //Cox todo: demo js-functionality:
    let services = document.querySelectorAll('input[name="services"]:checked');
      let total = 0;
      
      services.forEach(service => {
          total += parseFloat(service.value);
      });
  
      if (services.length === 3) {
          total *= 0.9; //Apply 10% discount
      }
  
      document.getElementById('total').value = '$' + total.toFixed(2);
  }