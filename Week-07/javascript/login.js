window.onload = function(){

    var buttonHome = document.getElementById('buttonHome').addEventListener('click', clickButtonHome);
    function clickButtonHome(e){
        document.location.href = 'index.html';
   }

   
    function clickButtonHome(e){
        document.location.href = 'https://valeriaruizareas.github.io/BaSP-A2022-Etapa-1/Week-06/views/index.html';
    }

    var button = document.getElementById('button');

    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');

    var password= document.getElementById('password');
    var errorPassword = document.getElementById('errorPassword');

    button.onclick = function(e){
        e.preventDefault();

        var strMail = validateEmail(email.value);
        var strPwd  = validatePassword(password.value)

        
        if (email.value == '' && password.value == ''){
            alert('Email & Password are requiered');
        
        } else if (strMail.length > 0){
            alert(strMail);

        } else if (strPwd.length > 0){
            alert(strPwd);
        
        
        } else {
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email.value + '&password=' + password.value     
            var promise = fetch(url);

            promise
            .then(function (res){
                return res.json();
            })
            .then(function (data){
                var success = data.success;
                var msg =  data.msg;

                if (success == true){
                    alert('SUCCESS: ' + msg);
                } else {
                    alert('ERROR: ' + msg);
                }
            })
            .catch(function (error){
                alert(error);
            })
        }

    }

    email.onblur = function(e){
        e.preventDefault();
        errorEmail.innerText = validateEmail(email.value);
    }

    email.onfocus = function(e){
        e.preventDefault();
        errorEmail.innerText = '';    
    }

    password.onblur = function(e){
        e.preventDefault();
        errorPassword.innerText = validatePassword(password.value);     
    }

    password.onfocus = function(e){
        e.preventDefault();
        errorPassword.innerText = '';    
    }

    function validateEmail(em){
        if (em == ''){
            return 'Email is requiered';
        }

        var validEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (em.match(validEmail) == null){
            return em + ' is not a valid email';   
        }
        return '';
    }

    function validatePassword(pas){
        if (pas == ''){
            return 'Password is requiered';
        }
        if (pas.length <8 ){
            return 'Password must have more than 8 characters';
        }
        if (validateAlpha(pas) == false){
            return 'Pasword must use only character and numbers'; 
        }
        if (haveSpaces(pas)){
            return 'Password can not have spaces';
        }
        if (haveNumbers(pas) == false){
            return 'Password must have numbers';
        }
        if (haveCharacters(pas) == false){
            return 'Password must have at least one character'
        }
        return '';
    }

    function validateAlpha(str){
        var special = ' äëïöüáéíóúáéíóúâêîôûàèìòùñç';
        for (i=0; i < str.length; i++){
            var c = str.substring(i, i+1).toLowerCase();
            if (((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') ||  special.lastIndexOf(c) >=0) == false){
                return false;
            }
        }
        return true;
    }

    function haveSpaces(str){
        spc = ' ';
        if (str.trim().lastIndexOf(spc)>=0){
            return true;
        }
        return false;
    }

    function haveCharacters(str){
        var special = 'äëïöüáéíóúáéíóúâêîôûàèìòùñç';
        for (i=0; i < str.length; i++){
            var c = str.substring(i, i+1).toLowerCase();
            if (((c >= 'a' && c <= 'z') ||  special.lastIndexOf(c) >=0)){
                return true;
            }
        }
        return false;
    }

    function haveNumbers(str){
        for (i=0; i < str.length; i++){
            var c = str.substring(i, i+1);
            if ((c >= '0' && c <= '9')){
                return true;
            }
        }
        return false;
    }
}