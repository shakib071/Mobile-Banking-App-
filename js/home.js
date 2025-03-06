//dynamically change the username , account number

let userName = localStorage.getItem("userName");
let userAccountNo = localStorage.getItem("userAccountNo");


changeInnerTextById('user-name',userName);
changeInnerTextById('account-no',userAccountNo);



//display the banace with animation 

let userBalance = localStorage.getItem("userBalance");

document.getElementById('balance').addEventListener('click',
    function () {
        
        let balanceText= document.getElementById('balance-text');
        let tempBalanceText = balanceText.innerText;
        console.log(tempBalanceText.innerText);
        balanceText.innerHTML= '<div class="spinner"></div>';
        
        setTimeout(() => {
            balanceText.innerText = userBalance;
         
            
            setTimeout(() => {
                balanceText.innerText = tempBalanceText;
               
            }, 1000);
        }, 1000);
        
    }
);