document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const amount = document.getElementById('amount-number').value;
  convertedAmount = parseFloat(amount);
  const pin = document.getElementById("pin").value;
  convertedPin = parseInt(pin);
  const mainBalance = document.getElementById('main-balance').innerText;
  const convertedM = parseFloat(mainBalance);


  if (convertedPin === 1234) {
    const sum = convertedM + convertedAmount;
    document.getElementById('main-balance').innerText = sum;
  }
  else {
    console.log('enter correct pin')
  }
})