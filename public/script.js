var form=document.getElementById('form');
const user=document.getElementById('user');
const email=document.getElementById('email');
const contact=document.getElementById('contact');




form.addEventListener('submit', e => {
    e.preventDefault();
     

    validateInputs();

   
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();
    
    if(userValue === '') {
        setError(user, 'Username is required');
    } else {
        setSuccess(user);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(contactValue === '') {
        setError(contact, 'Mobile number is required');
    } else if (contactValue.length < 10 ) {
        setError(contact, 'Mobile number must be of 10 digits.')
    } else {
        setSuccess(contact);
    }

    
}