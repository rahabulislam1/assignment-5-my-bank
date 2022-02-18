
function convertToFlt(expenses) {
    const getAmount = document.getElementById(expenses);
    let amount = parseFloat(getAmount.value).toFixed(3);
    return parseFloat(amount);
}
function totalExpenses() {
    const allExpenses = convertToFlt('food-ex-input') + convertToFlt('rent-ex-input') + convertToFlt('clothes-ex-input');
    return allExpenses;
}

function setValue(fieldId, setFinalValue) {
    const getTotalExpenses = document.getElementById(fieldId);
    getTotalExpenses.innerText = setFinalValue;
}

function clearSavingValue() {
    const clearSave = document.getElementById('save-input');
    const clearExpenses = document.getElementById('saving-amount');
    const clearRemainingB = document.getElementById('remaining-balance');
    clearExpenses.innerText = '0000';
    clearRemainingB.innerText = '0000';
    clearSave.value = '';
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
            alert("Please give valid Food expenses first!!");
        }
        else if (isNaN(getRent) || getRent < 0) {
            alert("Please give valid Rent expenses first!!");
        }
        else if (isNaN(getClothes) || getClothes < 0) {
            alert("Please give valid Clothes expenses first!!");
        }
        else if (totalExpenses() > getIncome) {
            alert("You don't have sufficient balance!!");
        }
        else {
            //set total expenses
            setValue('total-expenses', totalExpenses());
            // final balance
            const balance = convertToFlt('income-input') - totalExpenses();
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
    // else if()
    else {
        //Get Saving Amount
        const savingAmount = (convertToFlt('income-input') * getSavePercent) / 100;

        successMessage.style.display = 'block';
        failNotification.style.display = 'none';

        //Get Remaining Balance
        const finalExpenses = savingAmount + totalExpenses();
        const remainingBalance = convertToFlt('income-input') - finalExpenses;

        //Error for Saving
        if (remainingBalance < 0) {
            successMessage.style.display = 'none';
            clearSavingValue();
            alert("You don't have sufficient money for saving");
        }
        else {
            //Set Saving Amount
            setValue('saving-amount', savingAmount);
            //Set Remaining Balance
            setValue('remaining-balance', remainingBalance);
        }

    }
})