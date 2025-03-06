
let userName = localStorage.getItem("userName");
let userAccountNo = localStorage.getItem("userAccountNo");
let userBalance = localStorage.getItem("userBalance");
console.log(userName,userAccountNo,userBalance);

changeInnerTextById('user-name',userName);
changeInnerTextById('phone-number',userAccountNo);