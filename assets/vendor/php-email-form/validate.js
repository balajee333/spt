
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

      let formData = new FormData( thisForm );
      sendEnquiryToWhatsapp(thisForm, formData);

    });
  });

  function sendEnquiryToWhatsapp(thisForm, formData) {
    window.open("https://api.whatsapp.com/send?phone=9942883242&text=Hi SPT! I want to book a cab service!");
  }

})();
``