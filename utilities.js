function getValueById(id) {
    const noakhaliInputValue = document.getElementById(id).value;
    const noakhaliInputValueNumber = parseFloat(noakhaliInputValue);

    return noakhaliInputValueNumber;
}
