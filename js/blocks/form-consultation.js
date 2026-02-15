document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "form-consultation"
  const formConsultations = document.querySelectorAll('form[data-form="consultation"]');

  if (formConsultations.length) {
    formConsultations.forEach((formConsultation) => {
      formConsultation.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        const name = formConsultation.querySelector('input[name="name"]');
        const phone = formConsultation.querySelector('input[name="phone"]');
        const email = formConsultation.querySelector('input[name="email"]');
        const policy = formConsultation.querySelector('input[name="policy"]');

        if (!name || !phone || !email || !policy) return;

        if (!name.classList.contains('verified')) {
          name.classList.add('error');
          isValid = false;
        } else {
          name.classList.remove('error');
        }

        if (!phone.classList.contains('verified')) {
          phone.classList.add('error');
          isValid = false;
        } else {
          phone.classList.remove('error');
        }

        if (!email.classList.contains('verified')) {
          email.classList.add('error');
          isValid = false;
        } else {
          email.classList.remove('error');
        }

        if (!policy.checked) {
          isValid = false;
        }

        if (isValid) {
          closeModalByName(formConsultation.getAttribute('data-form'));
          setTimeout(() => {
            showModal("success")
            resetForm(formConsultation);
          }, 300)
        }
      });
    });
  }
});
