

document.getElementById('login-btn').addEventListener('click',
    function (event) {
        event.preventDefault();
        let phone = document.getElementById('phone-number').value;
        let pin = document.getElementById('pin').value;

        let passCurrect = false;
        for(let i=0;i<userData.length ;i++){
            if(phone === userData[i].phone && pin === userData[i].pin ){
                window.location.href= 'home.html';
                passCurrect= true;
                
                localStorage.setItem("userName",userData[i].name);
                localStorage.setItem("userPhoneNum",userData[i].phone);
                break;
            }
        }

        if(!passCurrect){
            alert("Password or Number is not correct");
        }

        
        
    }
);