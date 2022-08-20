function getTotalExpenses(){
    const foodCostInput = document.getElementById('food-cost');
    const foodCostAmountText = foodCostInput.value;
    const foodCostAmount = parseFloat(foodCostAmountText);

    const houseRentInput = document.getElementById('house-rent-cost');
    const houseRentAmountText = houseRentInput.value;
    const houseRentAmount = parseFloat(houseRentAmountText);

    const clothsCostInput = document.getElementById('cloths-cost');
    const clothsCostAmountText = clothsCostInput.value;
    const clothsCostAmount = parseFloat(clothsCostAmountText);

    if(isNaN(foodCostAmount) || foodCostAmount < 0 || isNaN(houseRentAmount) || houseRentAmount < 0 || isNaN(clothsCostAmount) || clothsCostAmount < 0){
        alert("Type Positive Value");
        document.getElementById('remaining-balance').innerText = '';
        document.getElementById('total-expenses').innerText = '';
    }

    else{
    // total expenses 
    const totalCost = foodCostAmount + houseRentAmount + clothsCostAmount;
    const totalCostOutput = document.getElementById('total-expenses');
    totalCostOutput.innerText = totalCost;
    return totalCost;
    }
}

// Calculate Button 
document.getElementById('calculate-button').addEventListener('click', function(){
    // income amount 
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    incomeAmount = parseFloat(incomeAmountText);

    if(isNaN(incomeAmount) || incomeAmount < 0){
        alert("Please enter positive number");
        document.getElementById('remaining-balance').innerText = '';
        document.getElementById('total-expenses').innerText = '';
    }
    
    else{
    // function calling 
    const finalCostAmount = getTotalExpenses(incomeAmount);
    
    // remaining balance 
    const remainingBalance = incomeAmount - finalCostAmount;
    const remainingBalanceOutput = document.getElementById('remaining-balance');
        if(incomeAmount < finalCostAmount){
            alert("expense are exceed");
            document.getElementById('remaining-balance').innerText = '';
            document.getElementById('total-expenses').innerText = '';
        }
        else{
            remainingBalanceOutput.innerText = remainingBalance;
            alert("Please enter positive number");
        }

        alert("Please enter positive number");
    }
})

// Saving Button 
document.getElementById('save-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    // function calling 
    const finalCostAmount = getTotalExpenses(incomeAmount);
    
        // remaining balance 
        remainingBalance = incomeAmount - finalCostAmount;

        // saving amount 
        savingParcentInputText = document.getElementById('saving-input');
        savingParcentText = savingParcentInputText.value;
        savingParcentAmount = parseFloat(savingParcentText);
        savingParcent = savingParcentAmount / 100;
        savingAmount = incomeAmount * savingParcent;

        if(savingAmount > remainingBalance){
            alert("Please enter positive number");
            document.getElementById('saving-amount').innerText = '';
            document.getElementById('remaining-balance-afterSaving').innerText = '';
        }

        else{
        // saving amount output 
        savingAmountOutput = document.getElementById('saving-amount');
        savingAmountOutput.innerText = savingAmount;

        alert("Please enter positive number");

        // remaining balance after saving 
        remainingBalanceAfterSaving = remainingBalance - savingAmount;
        remainingBalanceAfterSavingOutput = document.getElementById('remaining-balance-afterSaving');
        remainingBalanceAfterSavingOutput.innerText = remainingBalanceAfterSaving;
        }
})