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

        if (email.value.toLowerCase() == 'petra_arcia@gigatech.com' && password.value == 'milanesa123'){
            alert('login succesful with ' + email.value + '/' + password.value);
            return;
        }

        alert('email or password invalid');
        console.log(email.value, password.value);
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

        return '';
    }
}