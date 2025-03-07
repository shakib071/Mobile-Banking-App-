
//back button

document.getElementById('send-money-back-btn').addEventListener('click',
    function () {
        window.location.href = '../home.html'
    }
);


//qr code 


document.getElementById('send-money-scan-qr').addEventListener('click',
    function () {
        console.log("hello");
    }
);



//next btn

document.getElementById('send-money-next-btn').addEventListener('click',
    function (){
        let accNum = document.getElementById('send-money-acc-num').value;
        if(accNum){
            console.log(accNum);
        }
        else{
            console.log('painai');
        }
        
    }
);

