var ctb = document.querySelector('.cta-button') ;
var ic = document.querySelector('.close-icon') ;
var mc = document.querySelector('.modal-container') ;

ctb.addEventListener('click',function(){
    mc.style.visibility ='visible' ;
})
ic.addEventListener('click',function(){
    mc.style.visibility ='hidden' ;
})








const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const lastname = document.getElementById('lastname');

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
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const lastnameValue = lastname.value.trim() ;   

    if(firstnameValue === '') {
        setError(firstname, 'firstname is required');
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'lastname is required');
    } else {
        setSuccess(lastname);
    }


    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    

};
