window.onload = function(){

    var buttonHome = document.getElementById('buttonHome').addEventListener('click', clickButtonHome);
    function clickButtonHome(e){
        document.location.href = 'index.html';
    }

    var button = document.getElementById('button');

    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');

    var password= document.getElementById('password');
    var errorPassword = document.getElementById('errorPassword');

    button.onclick = function(e){
        e.preventDefault();

        var str;

        str = validateEmail(email.value);
        if (str.length > 0){
            alert(str);
            return;
        }

        str = validatePassword(password.value)
        if (str.length >0){
            alert(str);
            return;
        }

        alert('login succesful with ' + email.value + '/' + password.value);
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
            return 'email can not be emty';
        }

        var validEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (em.match(validEmail) == null){
            return em + ' is not a valid email';   
        }
        return '';
    }

    function validatePassword(pas){
        if (pas == ''){
            return 'password can not be empty';
        }
        if (pas.length <8 ){
            return 'must have more than 8 characters';
        }
        if (validateAlpha(pas) == false){
            return 'use only character and numbers'; 
        }
        if (haveSpaces(pas)){
            return 'password can not hace spaces';
        }
        if (haveNumbers(pas) == false){
            return 'must have numbers';
        }
        if (haveCharacters(pas) == false){
            return 'must have at lease one character'
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