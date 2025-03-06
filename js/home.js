
let userName = localStorage.getItem("userName");
let userPhoneNum = localStorage.getItem("userPhoneNum");
console.log(userName,userPhoneNum);

changeInnerTextById('user-name',userName);
changeInnerTextById('phone-number',userPhoneNum);