const formRef = document.querySelector('.login-form');

// console.log(formRef.elements);

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

    event.preventDefault();



    if (event.currentTarget.elements.email.value !== '' && event.currentTarget.password.value !== '') {
        
        const formData = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.password.value,
        }
    
        console.log(formData);
        
    } else {

        alert("Please fill in all the fields!");
        
    }

    event.currentTarget.reset();
}
