const getOTP =(length,option={})=>{
  let input = document.getElementById('number');
  
  if (input.value === '') {
    alert('Please Enter the Phone No.');
    return false;
  }
  
  const digits = '0123456789';
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = alphabets.toUpperCase();
  const specialChars = '!@#$%^';

  let defaultOption = {
    digits:true,
    alphabets:true,
    upperCase:true,
    specialChars:true,
  };

  let opt = {...defaultOption,...option};
  let allowsChars =((opt.digits || '') && digits);
  allowsChars += ((opt.alphabets || '') && alphabets);
  allowsChars += ((opt.upperCase || '') && upperCase);
  allowsChars += ((opt.specialChars || '') && specialChars);

  let getOTP = '';
  while (getOTP.length < length) {
    let random = Math.random();
    let charIndex = Math.floor(random *(allowsChars.length - 1)+0)
    getOTP += allowsChars[charIndex];
  }
  document.getElementById('result').innerHTML = getOTP;

  }