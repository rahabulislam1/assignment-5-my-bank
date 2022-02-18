
function convertToFlt(expenses) {
    const getAmount = document.getElementById(expenses);
    let amount = parseInt(getAmount.value);
    return amount;
}
function totalExpenses() {
    const allExpenses = convertToFlt('food-ex-input') + convertToFlt('rent-ex-input') + convertToFlt('clothes-ex-input');
    return allExpenses;
}

function setValue(fieldId, setFinalValue) {
    const getTotalExpenses = document.getElementById(fieldId);
    getTotalExpenses.innerText = setFinalValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    //Get Input Value
    const getIncome = convertToFlt('income-input');
    const getFood = convertToFlt('food-ex-input');
    const getRent = convertToFlt('rent-ex-input');
    const getClothes = convertToFlt('clothes-ex-input');

    //Error Handle
    if (isNaN(getIncome) || getIncome < 0) {
        alert("Please give valid income first!!");
    }
    else {
        if (isNaN(getFood) || getFood < 0) {
            alert("Please give valid Food expenses first!!")
        }
        else if (isNaN(getRent) || getRent < 0) {
            alert("Please give valid Rent expenses first!!");
        }
        else if (isNaN(getClothes) || getClothes < 0) {
            alert("Please give valid Clothes expenses first!!")
        }
        else {
            //set total expenses
            setValue('total-expenses', totalExpenses());
            // final balance
            const balance = getIncome - totalExpenses();
            //set final Balance after expenses
            setValue('balance', balance);
        }
    }
});

document.getElementById('save-btn').addEventListener('click', function () {
    const getSavePercent = convertToFlt('save-input');
    const successMessage = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');

    if (isNaN(getSavePercent) || getSavePercent < 0) {
        successMessage.style.display = 'none';
        failNotification.style.display = 'block';
    }
    else {
        successMessage.style.display = 'block';
        failNotification.style.display = 'none';

        //Get Saving Amount
        const savingAmount = (convertToFlt('income-input') * getSavePercent) / 100;

        //Set Saving Amount
        setValue('saving-amount', savingAmount);

        //Get Remaining Balance
        const finalExpenses = savingAmount + totalExpenses();
        const remainingBalance = convertToFlt('income-input') - finalExpenses;

        //Set Remaining Balance
        setValue('remaining-balance', remainingBalance);
    }
})