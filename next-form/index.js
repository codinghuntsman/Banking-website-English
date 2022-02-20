// Deposite and withdraw input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldAmount;
};
// Deposite and withdraw balance update
function balanceUpdate(depositeBalanceId, currentDepositeAmount) {
    const depositeBalance = document.getElementById(depositeBalanceId);
    const depositeBalanceText = depositeBalance.innerText;
    const totalDepositeAmount = parseFloat(depositeBalanceText)
    depositeBalance.innerText = totalDepositeAmount + currentDepositeAmount;
};
// Fixed balance can not withdraw
function totalBalanceFixed() {
    const totalBalance = document.getElementById('total-balance');
    const balanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(balanceText);
    return previousTotalBalance;
}
// Total balance update
function totalBalanceUpdate(currentDepositeAmount, isSum) {
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = totalBalanceFixed();
    if (isSum == true) {
        totalBalance.innerText = previousTotalBalance + currentDepositeAmount;
    }
    else {
        totalBalance.innerText = previousTotalBalance - currentDepositeAmount;
    }
};
// Deposite area
document.getElementById('deposite-button').addEventListener('click', function () {
    const currentDepositeAmount = getInputValue('deposite-field');
    if (currentDepositeAmount > 0) {
        balanceUpdate('deposite-balance', currentDepositeAmount);
        totalBalanceUpdate(currentDepositeAmount, true);
    }
    else {
        console.log('invalid balance');
    };

});

// Withdraw area
document.getElementById('withdraw-button').addEventListener('click', function () {
    const currentWithdrawAmount = getInputValue('withdraw-field');
    const fiexedBalance = totalBalanceFixed();
    if (currentWithdrawAmount > 0 && currentWithdrawAmount < fiexedBalance) {
        balanceUpdate('withdraw-amount', currentWithdrawAmount)
        totalBalanceUpdate(currentWithdrawAmount, false);
    }
    else {
        console.log('input valid number');
    }
    if (currentWithdrawAmount > fiexedBalance) {
        console.log('you can not withdraw fixed amount');
        // error messager jonno
    }
});












// if (currentWithdrawAmount > 0 && currentWithdrawAmount < fiexedBalance && fiexedBalance < 100) {
    //     balanceUpdate('withdraw-amount', currentWithdrawAmount)
    //     totalBalanceUpdate(currentWithdrawAmount, false);
    // }
    // else {
    //     console.log('input valid number');
    // }
    // if (currentWithdrawAmount > fiexedBalance) {
    //     console.log('you can not withdraw fixed amount');
    //     // error messager jonno
    // }

















// // Deposite and withdraw input field
// function getInputValue(inputParameter) {
//     const inputField = document.getElementById(inputParameter);
//     const inputFieldText = inputField.value;
//     const inputFieldAmount = parseFloat(inputFieldText);
//     inputField.value = '';
//     return inputFieldAmount;
// };
// // Deposite and withdraw balance update
// function balanceUpdate(depositeBalanceId, currentDepositeAmount) {
//     const depositeBalance = document.getElementById(depositeBalanceId);
//     const depositeBalanceText = depositeBalance.innerText;
//     const totalDepositeAmount = parseFloat(depositeBalanceText)
//     depositeBalance.innerText = totalDepositeAmount + currentDepositeAmount;
// };
// // Total balance update
// function totalBalanceUpdate(currentDepositeAmount, isSum) {
//     const totalBalance = document.getElementById('total-balance');
//     const balanceText = totalBalance.innerText;
//     const previousTotalBalance = parseFloat(balanceText);
//     if (isSum == true) {
//         totalBalance.innerText = previousTotalBalance + currentDepositeAmount;
//     }
//     else {
//         totalBalance.innerText = previousTotalBalance - currentDepositeAmount;
//     }
// };
// // Deposite area
// document.getElementById('deposite-button').addEventListener('click', function () {
//     const currentDepositeAmount = getInputValue('deposite-field');

//     // deposite balance
//     balanceUpdate('deposite-balance', currentDepositeAmount);

//     // Update total balance
//     totalBalanceUpdate(currentDepositeAmount, true);
// });

// // Withdraw area
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const currentWithdrawAmount = getInputValue('withdraw-field');

//     // Update withdraw amount
//     balanceUpdate('withdraw-amount', currentWithdrawAmount)

//     // reduce from  total balance
//     totalBalanceUpdate(currentWithdrawAmount, false);
// });

