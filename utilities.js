// Shared function
function getValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);

    return inputValueNumber;
}

function getTextById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function toggleMenuById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


