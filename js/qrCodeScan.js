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

startQRScanner();