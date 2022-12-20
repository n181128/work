 function Validation() {
                var name =document.getElementById("name").value;
                var email =document.getElementById("email").value;
                var phone =document.getElementById("number").value;
                var password =document.getElementById("pwd").value;
                var confirm_password =document.getElementById("pwd1").value;
                var address =document.getElementById("address").value;
                var regEmail=/[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;  
                var regPhone=/^\d{10}$/;                                                                         

                if (name.length<4 && name.length >2) {
                    document.getElementById("name").style.border="3px solid red";
                    document.getElementById("nm").style.visibility="visible";
                    return false;
                }
                 
                if ( email == "" || !regEmail.test(email)) {
                    document.getElementById("email").style.border="3px solid red";
                    document.getElementById("em").style.visibility="visible";
                    return false;
                }
                 if (!regPhone.test(phone)) {
                    document.getElementById("number").style.border="3px solid red";
                    document.getElementById("nu").style.visibility="visible";
                    return false;
                }
                  
                if (password == "") {
                   myInput.onfocus = function() {
                    document.getElementById("pwd").style.display = "block";
                }

                myInput.onblur = function() {
                document.getElementById("pwd").style.display = "none";
                }
                }
                if(confirm_password!=password){
                    document.getElementById("pwd1").style.border="3px solid red";
                    document.getElementById("cp").style.visibility="visible";
                    return false;
                }
                 if((address.length < 20) || (address.length > 100)) {
                    document.getElementById("address").style.border="3px solid red";
                    document.getElementById("add").style.visibility="visible";
                    return false;
                }
 
                return true;
            }