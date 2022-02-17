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

