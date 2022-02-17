// function convertToFlt(){

// }

function finalBalance(expenceTotal) {
    const getBalance = document.getElementById('balance');
    const balance = parseFloat(getIncome.value) - expenceTotal;
    getBalance.innerText = balance;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const getIncome = document.getElementById('income-input');

    const getFood = document.getElementById('food-ex-input');
    const getRent = document.getElementById('rent-ex-input');
    const getClothes = document.getElementById('clothes-ex-input');

    const totalExpenses = document.getElementById('total-expenses');
    const allExpenses = parseFloat(getFood.value) + parseFloat(getRent.value) + parseFloat(getClothes.value);
    totalExpenses.innerText = allExpenses;

    finalBalance(allExpenses);
});

document.getElementById('save-btn').addEventListener('click', function () {
    const getIncome = document.getElementById('income-input');

    const getSavePercent = document.getElementById('save-input');
    const savingAmount = (parseFloat(getIncome.value) * parseFloat(getSavePercent.value)) / 100;

    const getSaveAmount = document.getElementById('saving-amount');
    getSaveAmount.innerText = savingAmount;

    const getRemainingBalance = document.getElementById('remaining-balance');
    const remainingBalance = parseFloat(getIncome.value) - savingAmount;
    getRemainingBalance.innerText = remainingBalance;

})