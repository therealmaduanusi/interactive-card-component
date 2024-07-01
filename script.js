'use strict';
function validateForm() {
    const cardName = document.getElementById('cardholder-name').value.trim()
    const cardNumber = document.getElementById('card-number').value;
    const expMonth = document.getElementById('exp-month').value;
    const expYear = document.getElementById('exp-year').value;
    const cvc = document.getElementById('cvc').value;
    const inputs = document.querySelectorAll('input')
    let isValid = true;

    inputs.forEach(input => {
        let attribute = input.getAttribute('name')
        if (attribute === 'cname') {
            // Validate card name
            if (!cardName) {
                document.getElementById('card-name-error').style.display = 'block';
                input.classList.add('borderError');
                isValid = false;
            } else {
                document.getElementById('card-name-error').style.display = 'none';
                input.classList.remove('borderError');
            }
        }

        if (attribute === 'cnumber') {
            // Validate card number
            if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ''))) {
                document.getElementById('card-number-error').style.display = 'block';
                input.classList.add('borderError');
                isValid = false;
            } else {
                document.getElementById('card-number-error').style.display = 'none';
                input.classList.remove('borderError');
            }
        }

        if (attribute === 'exp-month' || attribute === 'exp-year') {
            // Validate expiration date
            if (!/^\d{2}$/.test(expMonth) || !/^\d{2}$/.test(expYear)) {
                document.getElementById('exp-date-error').style.display = 'block';
                input.classList.add('borderError');
                isValid = false;
            } else {
                document.getElementById('exp-date-error').style.display = 'none';
                input.classList.remove('borderError');
            }
        }

        if (attribute === 'cvc') {
            // Validate CVC
            if (!/^\d{3}$/.test(cvc)) {
                document.getElementById('cvc-error').style.display = 'block';
                input.classList.add('borderError');
                isValid = false;
            } else {
                document.getElementById('cvc-error').style.display = 'none';
                input.classList.remove('borderError');
            }
        }
    })
    
    

    

    

    if (isValid) {
        document.querySelector('.card-form').innerHTML = `
            <img src="/images/Oval.svg" alt="success">
            <h1> Thank you </h1>
            <p>We’ve added your card details</p>
            <a class='homepage' href="index.html">continue</a>
        `
    }
}
