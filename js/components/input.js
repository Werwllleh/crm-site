document.addEventListener('DOMContentLoaded', () => {
  // Скрипты для компонента "input"
  const inputs = document.querySelectorAll('.input-field input');
  if (inputs.length) {
    inputs.forEach(input => {

      setTimeout(() => {
        checkInput(input)
      }, 100)


      input.addEventListener('input', () => {

        checkInput(input)
        validateInput(input)

      })

      input.addEventListener('focus', () => {

        checkInput(input)
        validateInput(input)

      })

    })
  }

  const inputsPhones = document.querySelectorAll('.input--phone');
  if (inputsPhones.length) {
    inputsPhones.forEach(inputPhone => {
      if (inputPhone) {
        inputPhone.setAttribute('maxlength', '18');

        const maskOptions = {
          mask: '+{7} (000) 000-00-00',
          overwrite: true
        };

        IMask(inputPhone, maskOptions);
      }
    })
  }

  function validateInput(input) {
    const field = input.closest('.input-field');
    const inputName = input.name;

    if (!field) return;

    if (input.value.length === 0) {
      return input.classList.remove('error')
    }

    if (inputName === 'phone') {
      if (input.value.replace(/\D/g, '').length !== 11) {
        input.classList.add('error')
        input.classList.remove('verified')
      } else {
        input.classList.remove('error')
        input.classList.add('verified')
      }
    }

    if (inputName === 'name') {
      if (input.value.length < 2) {
        input.classList.add('error')
        input.classList.remove('verified')
      } else {
        input.classList.remove('error')
        input.classList.add('verified')
      }
    }

    if (inputName === 'email') {
      const atIncluded = input.value.includes('@');
      const dotIncluded = input.value.includes('.');
      const lastDotIndex = input.value.lastIndexOf('.');
      const domainPartLength = input.value.length - lastDotIndex - 1;

      if (atIncluded && dotIncluded && domainPartLength >= 2) {
        input.classList.remove('error')
        input.classList.add('verified')
      } else {
        input.classList.add('error')
        input.classList.remove('verified')
      }
    }

  }
});

function checkInput(input) {
  if (input.value.length) {
    input.classList.add('focus')
  } else {
    input.classList.remove('focus')
    input.classList.remove('verified')
  }
}
