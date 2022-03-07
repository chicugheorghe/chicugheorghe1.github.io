
const lastNameField = document.getElementById('firstName')
const firstNameField = document.getElementById('lastName')
const emailField = document.getElementById('email')
const comentField = document.getElementById('coment')
const sendButtom = document.getElementById('button-send')
const error = document.querySelector('#errorMessage');

function showError() {
    error.style.display = 'block';
        error.innerHTML = 'All fields are required and must have a value! ';
}

function hideError(){
    if (error.style.display = 'block'){
        error.style.display = 'none'
    }
}

function showResult () {
const resultContainer = document.getElementById('resultContainer');
resultContainer.style.display = 'block';
const nameResult = document.getElementById('nameResult')

nameResult.innerHTML = lastNameField.value;
}

sendButtom.addEventListener('click', (event) =>{
    event.preventDefault();
    if (lastNameField.value !=='' || !firstNameField.value || !emailField.value || !comentField.value){
      
        showError();
    }else {
        // alert('Hello')
        hideError();
        showResult();
       
    }

});



