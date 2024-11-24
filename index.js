// Update the rate value displayed next to the range input
document.getElementById('rate').addEventListener('input', function() {
    document.getElementById('rateValue').textContent = this.value;
});

// Function to calculate EMI
function calculateEMI() {
    const principal = parseFloat(document.getElementById('principal').value); // Principal loan amount
    const annualRate = parseFloat(document.getElementById('rate').value); // Annual interest rate
    const tenureYears = parseInt(document.getElementById('tenure').value); // Loan tenure in years

    // Convert the annual rate to a monthly rate
    const monthlyRate = (annualRate / 100) / 12;

    // Calculate the number of months
    const months = tenureYears * 12;

    // EMI Calculation using the formula
    if (monthlyRate === 0) {
        // If the interest rate is 0
        var emi = principal / months;
    } else {
        var emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    // Calculate the total payment and total interest
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    // Display the results
    document.getElementById('emiValue').textContent = emi.toFixed(2);
    document.getElementById('totalPayment').textContent = totalPayment.toFixed(2);
    document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
}
