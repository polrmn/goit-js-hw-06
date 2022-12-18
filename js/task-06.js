const InputRef = document.querySelector('#validation-input');

InputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    InputRef.classList.add("invalid");

    if(event.currentTarget.value.split('').length === Number(InputRef.dataset.length)) {

        InputRef.classList.replace("invalid","valid");
        
    } else {

        InputRef.classList.replace("valid","invalid");

    }
}
