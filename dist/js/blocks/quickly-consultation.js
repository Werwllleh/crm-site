document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для блока "quickly-consultation"
  const quicklyConsultationForms = document.querySelectorAll('form[data-form="form-quickly-consultation"]');
  if (quicklyConsultationForms.length) {
    quicklyConsultationForms.forEach((quicklyConsultationForm) => {
      quicklyConsultationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        const phone = quicklyConsultationForm.querySelector('input[name="phone"]');
        const policy = quicklyConsultationForm.querySelector('input[name="policy"]');

        if (!phone || !policy) return;

        if (!phone.classList.contains('verified')) {
          phone.classList.add('error');
          isValid = false;
        } else {
          phone.classList.remove('error');
        }

        if (!policy.checked) {
          isValid = false;
        }

        if (isValid) {
          showModal("success")
          resetForm(quicklyConsultationForm);
        }
      });
    });
  }
});
