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

        let takaSign = document.getElementById('taka-sign');
        takaSign.style.display = "none";
        balanceText.innerHTML= '<div class="spinner"></div>';
        
        setTimeout(() => {
            balanceText.innerText = userBalance;
            takaSign.style.display = "block";
            
            setTimeout(() => {
                balanceText.innerText = tempBalanceText;
                
               
            }, 1000);
        }, 2000);

        
        
    }
);




//services section script

document.getElementById('send-money').addEventListener('click', 
    function (){
        window.location.href = 'html/send_money.html';
    }
);



