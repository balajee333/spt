
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();
      let thisForm = this;
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');
      let name = document.getElementById('name').value;
      let message = document.getElementById('message').value;
      sendEnquiryToWhatsapp(name, message);

    });
  });

  function sendEnquiryToWhatsapp(name, message) {
    window.open(`https://api.whatsapp.com/send?phone=9942883242&text=Hi SPT, I am ${name}. ${message}`);
  }

})();