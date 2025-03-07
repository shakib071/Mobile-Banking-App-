
//back button

document.getElementById('send-money-back-btn').addEventListener('click',
    function () {
        window.location.href = '../home.html'
    }
);


//qr code 

function onScanSuccess(decodedText, decodedResult) {
    //     decodedText	The actual content of the scanned QR code (e.g., a URL, text, etc.).
    // decodedResult	Additional QR code details (e.g., raw scan data, format, etc.).
    
    document.getElementById('qr-result').innerText = "Scanned QR: " + decodedText;
}

function startQRScanner() {
    
    let qrScanner = new Html5Qrcode("qr-reader");
    qrScanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 }, 
        onScanSuccess
    ).catch(err => {
        alert("error scanning QR code");
    });
   
}

document.getElementById('send-money-scan-qr').addEventListener('click',
    function () {
        startQRScanner();
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

