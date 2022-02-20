// get balance update
document.getElementById('deposite-button').addEventListener('click', function () {
    const currentDepositeAmount = getInputValue('deposite-field');

    //  kicu code kete gace


    // deposite balance
    const depositeBalance = document.getElementById('deposite-balance');
    const previousDepositeAmount = depositeBalance.innerText;
    const totalDepositeAmount = (currentDepositeAmount) + parseFloat(previousDepositeAmount);
    depositeBalance.innerText = totalDepositeAmount;

    // Update total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const updateTotalBalance = parseFloat(previousTotalBalance) + parseFloat(currentDepositeAmount);
    totalBalance.innerText = updateTotalBalance;

    // clear input field
    depositeInputField.value = '';

});
// Withdraw eventhandler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const currentWithdrawAmount = withdrawField.value;

    // Update withdraw amount
    const withdrawAmount = document.getElementById('withdraw-amount');
    const previousWithDrawAmount = withdrawAmount.innerText;
    const totalWithDrawAmount = parseFloat(previousWithDrawAmount) + parseFloat(currentWithdrawAmount);
    withdrawAmount.innerText = totalWithDrawAmount;

    // reduce from  total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance;
    const reduceFromTotalBalance = previousTotalBalance - currentWithdrawAmount;
    totalBalance.innerText = reduceFromTotalBalance;

    // clear input field
    withdrawField.value = '';
});