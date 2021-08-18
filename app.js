let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let sFirstName = document.querySelector('#sFirstName')
let sLastName = document.querySelector('#sLastName')
let otherDetails = document.querySelector('#otherDetails')
let terms = document.querySelector('#terms')
let modalButton = document.querySelector('#modalButton');

let spouseDiv = document.querySelector('#spouseInput');
let modalContainer = document.querySelector('.modal-container');
let header = document.querySelector('.header');
let formContainer = document.querySelector('.form-container');

let married = document.querySelector('#married')
let unmarried = document.querySelector('#unmarried')
let male = document.querySelector('#male');
let female = document.querySelector('#female');

let saveButton = document.querySelector('#saveButton')
let resetButton = document.querySelector('#resetButton')

let smallFirstName = document.querySelector('#smallFirstName');
let smallLastName = document.querySelector('#smallLastName');
let smallGender = document.querySelector('#smallGender');
let smallMaritalStatus = document.querySelector('#smallMaritalStatus');
let smallSpouseFirstName = document.querySelector('#smallSpouseFirstName');
let smallSpouseLastName = document.querySelector('#smallSpouseLastName');
let smallTC = document.querySelector('#smallTC');

let currGender = 0, currMaritalStatus = 0;
let currFirstName = 0, currLastName = 0, currSpouseFirstName = 0, currSpouseLastName = 0;

let doSwitchChange = (first, second, value) =>{
    first.classList.add('switch-again');
    second.classList.remove('switch-again');
    if(value === 1){
        spouseDiv.classList.remove('hiding-input');
    }else if(value === 2){
        spouseDiv.classList.add('hiding-input');
    }
}

let resetEverything = () =>{
    currGender = 0, currMaritalStatus = 0;
    currFirstName = 0, currLastName = 0, currSpouseFirstName = 0, currSpouseLastName = 0;
    firstName.value = '';
    lastName.value = '';
    sFirstName.value = '';
    sLastName.value = '';
    otherDetails.value = '';
    married.classList.remove('switch-again');
    unmarried.classList.remove('switch-again');
    male.classList.remove('switch-again');
    female.classList.remove('switch-again');
    spouseDiv.classList.add('hiding-input');
    terms.checked = false;
    smallMaritalStatus.classList.add('hiding-input');
    smallGender.classList.add('hiding-input');
    smallFirstName.classList.add('hiding-input');
    smallLastName.classList.add('hiding-input');
    smallSpouseFirstName.classList.add('hiding-input');
    smallSpouseLastName.classList.add('hiding-input');
    smallTC.classList.add('hiding-input');
}
married.addEventListener('click', () => doSwitchChange(married, unmarried, 1));
unmarried.addEventListener('click', () => doSwitchChange(unmarried, married, 2));
male.addEventListener('click', () => doSwitchChange(male, female, 3));
female.addEventListener('click', () => doSwitchChange(female, male, 3));

married.addEventListener('click', () => {
    currMaritalStatus = 1;
    smallMaritalStatus.classList.add('hiding-input');
})

unmarried.addEventListener('click', () => {
    currMaritalStatus = 2;
    smallMaritalStatus.classList.add('hiding-input');
})

male.addEventListener('click', () => {
    currGender = 1;
    smallGender.classList.add('hiding-input');
})

female.addEventListener('click', () => {
    currGender = 1;
    smallGender.classList.add('hiding-input');
})

resetButton.addEventListener('click', () => {
    resetEverything();
})

saveButton.addEventListener('click', () => {
    
    let isTrue = true; 
    
    if(currFirstName === 0){
        smallFirstName.classList.remove('hiding-input');
        isTrue = false;
    }
    if(currLastName === 0){
        smallLastName.classList.remove('hiding-input');
        isTrue = false;
    }

    if(currGender === 0){
        smallGender.classList.remove('hiding-input');
        isTrue = false;
    }

    if(currMaritalStatus === 0){
        smallMaritalStatus.classList.remove('hiding-input');
        isTrue = false;
    }else if(currMaritalStatus === 1){

        if(currSpouseFirstName === 0){
            smallSpouseFirstName.classList.remove('hiding-input');
            isTrue = false;
        }
        if(currSpouseLastName === 0){
            smallSpouseLastName.classList.remove('hiding-input');
            isTrue = false;
        }
    }
    if(terms.checked === false){
        smallTC.classList.remove('hiding-input');
        isTrue = false;
    }

    if(isTrue === true){
        console.log('isTrue runnning');
        resetEverything();
        header.classList.toggle('add-filter');
        formContainer.classList.toggle('add-filter');

        modalContainer.classList.toggle('hiding-input');
        
    }
})

firstName.addEventListener('input', () => {
    if(firstName.value.length > 0){
        currFirstName = 1;
        smallFirstName.classList.add('hiding-input');
    }else{
        currFirstName = 0;
    }    
})
lastName.addEventListener('input', () => {
    if(lastName.value.length > 0){
        currLastName = 1;
        smallLastName.classList.add('hiding-input');
    }else{
        currLastName = 0;
    }    
})


sFirstName.addEventListener('input', () => {
    if(sFirstName.value.length > 0){
        currSpouseFirstName = 1;
        smallSpouseFirstName.classList.add('hiding-input');
    }else{
        currSpouseFirstName = 0;
    }    
})
sLastName.addEventListener('input', () => {
    if(sLastName.value.length > 0){
        currSpouseLastName = 1;
        smallSpouseLastName.classList.add('hiding-input');
    }else{
        currSpouseLastName = 0;
    }    
})

terms.addEventListener('input', () => {
    smallTC.classList.add('hiding-input');
})

modalButton.addEventListener('click', () => {
    header.classList.toggle('add-filter');
    formContainer.classList.toggle('add-filter');

    modalContainer.classList.toggle('hiding-input');
})