function getTextElementValueById(elementId) {

    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {

    //calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementById('sub-total', currentSubTotal);

    //calculate tax 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);


}