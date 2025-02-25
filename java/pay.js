document.getElementById('login-btn').addEventListener('click', function (event) {
  event.preventDefault();
  const acounNumber = document.getElementById('acount-number').value;
  
  const pin = document.getElementById('pin').value;
  const convertedPin=parseInt(pin)
  if (acounNumber.length === 11) {
    if (convertedPin === 1234) {
      window.location.href="./main.html"
    }
    else {
      console.log('pin is wrong')
    }
  
  }
    
  else {
    console.log('enter valid acount')
  }
  })
