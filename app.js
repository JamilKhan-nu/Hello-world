//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate Results
function calculateResults(e) {
    console.log('calculating..')

    //UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayment = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principle * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = ((monthly * calculatePayment) - principle).toFixed(2);

    } else {
        showError('Please check your number')

    }

    e.preventDefault()
}

//Show error
function showError(error) {
    //create div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    //add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv, heading);

    //clear error after 3 sec
    setTimeout(clearError, 3000)

}

//clear error
function clearError() {
    document.querySelector('.alert').remove()
}

