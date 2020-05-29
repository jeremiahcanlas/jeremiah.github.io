//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){


let a = document.getElementById('amount').value;
let b = document.getElementById('interest').value;
let c = document.getElementById('years').value;
// if var above are empty it will just show error
    if(a === '' || b === '' || c === ''){

        showError('Please Check Your Numbers');
        e.preventDefault(); 
    } else {
// Hide Results
document.getElementById('results').style.display = 'none';
// Show Loader
document.getElementById('loading').style.display = 'block';

setTimeout(calculateResults, 1500); //loading will show for 1.5s before calculating results

  e.preventDefault(); }
});

//Calculate Results
function calculateResults(){

 //UI Variables
 const amountUI = document.getElementById('amount');
 const interestUI = document.getElementById('interest');
 const yearsUI = document.getElementById('years');

 //Result Variables
 const mPaymentUI = document.getElementById('monthly-payment');
 const tPaymentUI = document.getElementById('total-payment');
 const tInterestUI = document.getElementById('total-interest');

//Calculated Variables
 const principle = parseFloat(amountUI.value);
 const calculatedInt = parseFloat(interestUI.value) /100 /12; //gives out calculated interest
 const calculatedPayments = parseFloat(yearsUI.value) * 12; //gives calculated payments

 //Calculate Monthly Payments
 const x = Math.pow(1 + calculatedInt, calculatedPayments);// math.pow will give to the power of
 const monthly = (principle * x * calculatedInt) / (x-1); 

 // 'IF' to make sure if value is finite
if(isFinite(monthly)){
mPaymentUI.value =  '$' + monthly.toFixed(2);
tPaymentUI.value = '$' + (monthly*calculatedPayments).toFixed(2);
tInterestUI.value = '$' + ((monthly * calculatedPayments) - principle).toFixed(2);




//change display after timeout 
document.getElementById('results').style.display = 'block';
document.getElementById('loading').style.display = 'none';

} else {

showError('Please Check Your Numbers');

}

}

//Show Error
function showError(error){

document.getElementById('loading').style.display = 'none';
document.getElementById('results').style.display = 'none';

//Create a Div
const errorDiv = document.createElement('div');

// Get Elements
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

// Add Class
errorDiv.className = 'alert alert-danger';

//create text node and append to div
errorDiv.appendChild(document.createTextNode(error));

// Insert error above heading
card.insertBefore(errorDiv, heading);

//clear error after 3s
setTimeout(clearError, 2000);
}

// Clear error function
function clearError(){
    document.querySelector('.alert').remove();
}