

function convertToFlt(expenses) {
    const getAmount = document.getElementById(expenses);
    // console.log(getAmount);
    let amount = parseInt(getAmount.value);
    console.log(amount);
    // if (isNaN(amount)) {
    //     alert2 = alert('Hello world!');
    // }
    // else if (amount < 0) {
    //     // const alert2 = alert('Hello world!');
    //     return "6";
    // }

    if (amount < 0) {
        alert('Hrld!');
    }
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
    const getIncome = convertToFlt('income-input');

    //set total expenses
    setValue('total-expenses', totalExpenses());

    // final balance
    const balance = getIncome - totalExpenses();

    //set final Balance after expenses
    setValue('balance', balance);
});

document.getElementById('save-btn').addEventListener('click', function () {

    const getSavePercent = convertToFlt('save-input');
    // console.log(getSavePercent);
    if (getSavePercent < 0) {
        alert('Hrld!');
    }
    const savingAmount = (convertToFlt('income-input') * getSavePercent) / 100;

    //set saving amount value
    setValue('saving-amount', savingAmount);

    const finalExpenses = savingAmount + totalExpenses();
    const remainingBalance = convertToFlt('income-input') - finalExpenses;

    //set remaining Balance
    setValue('remaining-balance', remainingBalance);

})