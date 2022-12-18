const inputRef = document.querySelector('#name-input');
const spanNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    spanNameRef.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {

        spanNameRef.textContent = 'Anonymous';
        
    }
});
