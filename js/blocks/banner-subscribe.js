document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "banner-subscribe"
  const subscribeForms = document.querySelectorAll('form[data-form="form-subscribe"]');

  if (subscribeForms.length) {
    subscribeForms.forEach((subscribeForm) => {
      subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const email = subscribeForm.querySelector('input[name="email"]');
        const policy = subscribeForm.querySelector('input[name="policy"]');

        if (!email || !policy) return;

        if (!email.classList.contains('verified')) {
          email.classList.add('error');
          isValid = false;
        } else {
          email.classList.remove('error');
        }

        if (!policy.checked) {
          isValid = false;
          alert('Нужно согласие с политикой');
        }

        if (isValid) {
          alert('Данные отправлены');
          resetForm(subscribeForm);
        }

      })
    })
  }
});
