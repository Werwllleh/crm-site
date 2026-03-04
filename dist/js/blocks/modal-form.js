document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "modal-form"
  const formBaseForms = document.querySelectorAll('.form-base__form');
  if (formBaseForms.length) {
    formBaseForms.forEach(formBaseForm => {
      formBaseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        const name = formBaseForm.querySelector('input[name="name"]');
        const phone = formBaseForm.querySelector('input[name="phone"]');
        const email = formBaseForm.querySelector('input[name="email"]');
        const policy = formBaseForm.querySelector('input[name="policy"]');

        if (!name || !phone || !policy) return;

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

        if (email) {
          if (!email.classList.contains('verified')) {
            email.classList.add('error');
            isValid = false;
          } else {
            email.classList.remove('error');
          }
        }

        if (!policy.checked) {
          isValid = false;
        }

        if (isValid) {
          closeModalByName(formBaseForm.getAttribute('data-form'));
          setTimeout(() => {
            showModal("success")
            resetForm(formBaseForm);
          }, 300)
        }
      })
    })
  }
});
