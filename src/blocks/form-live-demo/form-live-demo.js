document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "form-live-demo"
  const formDemoRequests = document.querySelectorAll('form[data-form="form-demo-request"]');

  if (formDemoRequests.length) {
    formDemoRequests.forEach((formDemoRequest) => {
      formDemoRequest.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        const name = formDemoRequest.querySelector('input[name="name"]');
        const phone = formDemoRequest.querySelector('input[name="phone"]');

        if (!name || !phone) return;

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

        if (isValid) {
          alert('Данные отправлены');
          resetForm(formDemoRequest);
        }
      });
    });
  }
});
