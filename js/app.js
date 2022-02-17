// function convertToFlt(){

// }

function totalExpenses() {
    const getFood = document.getElementById('food-ex-input');
    const getRent = document.getElementById('rent-ex-input');
    const getClothes = document.getElementById('clothes-ex-input');

    const allExpenses = parseFloat(getFood.value) + parseFloat(getRent.value) + parseFloat(getClothes.value);
    return allExpenses;
}

// function finalBalance(expenceTotal) {
// }


document.getElementById('calculate-btn').addEventListener('click', function () {
    const getIncome = document.getElementById('income-input');

    const getTotalExpenses = document.getElementById('total-expenses');
    getTotalExpenses.innerText = totalExpenses();

    // finalBalance(allExpenses);
    const getBalance = document.getElementById('balance');
    const balance = parseFloat(getIncome.value) - totalExpenses();
    getBalance.innerText = balance;
});

document.getElementById('save-btn').addEventListener('click', function () {
    const getIncome = document.getElementById('income-input');

    const getSavePercent = document.getElementById('save-input');
    const savingAmount = (parseFloat(getIncome.value) * parseFloat(getSavePercent.value)) / 100;

    const getSaveAmount = document.getElementById('saving-amount');
    getSaveAmount.innerText = savingAmount;

    const getRemainingBalance = document.getElementById('remaining-balance');
    const finalExpenses = savingAmount + totalExpenses();
    const remainingBalance = parseFloat(getIncome.value) - finalExpenses;
    getRemainingBalance.innerText = remainingBalance;

})