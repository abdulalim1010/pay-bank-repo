document.getElementById('login-btn').addEventListener('click', function (event) {
  event.preventDefault();
  const acounNumber = document.getElementById('acount-number').value;
  
  const pin = document.getElementById('pin').value;
  if (acounNumber.length === 11) {
    if (pin ===" 1234") {
      console.log('okkk')
    }
    else {
      console.log('pin is wrong')
    }
  
  }
    
  else {
    console.log('enter valid acount')
  }
  })
