// function addInputValue(feildId){
//     const inputFeild = document.getElementById(feildId);
//     const inputFeildText = inputFeild.value;
//     const  value = parseFloat(inputFeildText);
//     inputFeild.value = '';
//     return value;
// }
// //innertext update
// function getInnerTextValue(feildId){
//     const feildTag = document.getElementById(feildId);
//     const feildInText = feildTag.innerText;
//     const value = parseFloat(feildInText);
//     return value;
// }
// //update total value
// function updateTotal(feildId, amount){
//     const previousTotal = getInnerTextValue(feildId);
//     const totalValue = previousTotal + amount;
//     document.getElementById(feildId).innerText = totalValue;
//     return totalValue;
// }
// //new balance
// function updateBalance(amount, isAdding){
//     const previousBalance = getInnerTextValue('balance-total');
//     let newBalance;
//     if(isAdding == true){
//         newBalance = previousBalance + amount;
//     }
//     else{
//         newBalance = previousBalance - amount;
//     }
//     document.getElementById('balance-total').innerText = newBalance;

// }

// document.getElementById('deposit-button').addEventListener('click', function(){
//     const amount = addInputValue('deposit-input');
//     if(amount > 0){
//         const depositTotal = updateTotal('deposit-total', amount);
//         updateBalance(amount, true)
//     }
// })
// document.getElementById('withdraw-button').addEventListener('click', function(){
//     const amount = addInputValue('withdraw-input');
//     const balance = getInnerTextValue('balance-total');
//   if(amount > 0 && amount <= balance){
//     const withdrawTotal = updateTotal('withdraw-total', amount);
//     updateBalance(amount, false)
//   }
// })


function getInputValue(feildId){
    const depositValue = document.getElementById(feildId);
    const depositTotal =depositValue.value;
    const value = parseFloat(depositTotal);
    depositValue.value = " "
    return value;
}
function updateTotal(feildId,amount){
    const totalValue = document.getElementById(feildId);
    const previousBalanceInText = totalValue.innerText;
    const previousTotal = parseFloat(previousBalanceInText)
    const newDeposit = previousTotal + amount;
    totalValue.innerText = newDeposit;
}
function updateBalance(amount,isAdding){
    const totalBalance = document.getElementById('balance-total');
    const previousBalanceInText = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceInText);
    // const newBalance = previousBalance + amount;
    let newBalance;
    if(isAdding == true){
            newBalance = previousBalance + amount;
    }else{
        newBalance = previousBalance - amount;
    }
    totalBalance.innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
   if(amount > 0){
   updateTotal('deposit-total',amount)
   updateBalance(amount,true)
   }

})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
   if(amount > 0){
   updateTotal('withdraw-total',amount)
   updateBalance(amount,false)
   }
    
})
