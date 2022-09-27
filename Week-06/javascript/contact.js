window.onload = function(){

    var button = document.getElementById('button');
    var reset = document.getElementById('reset');

    var name = document.getElementById('name');
    var errorName = document.getElementById('errorName');
    
    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');

    var area= document.getElementById('area');
    var errorArea = document.getElementById('errorSelectorArea');

    var message= document.getElementById('message');
    var errorMessage = document.getElementById('errorMessage');

    reset.onclick = function(e){
        e.preventDefault();
        name.value='';
        email.value='';
        area.value='';
        message.value='';

        errorName.innerText = '';  
        errorEmail.innerText = '';  
        errorSelectorArea.innerText = '';  
        errorMessage.innerText = '';  
    }

    button.onclick = function(e){
        e.preventDefault();


        var str;

        str = validateName(name.value);
        if (str.length > 0){
            alert(str);
            return;
        }

        str = validateEmail(email.value);
        if (str.length > 0){
            alert(str);
            return;
        }

        str = validateArea(area.value)
        if (str.length >0){
            alert(str);
            return;
        }

        str = validateMessage(message.value)
        if (str.length >0){
            alert(str);
            return;
        }

        alert('login succesful with ' + name.value + '/' + email.value + '/' + area.value + '/' + message.value);
    }

    name.onblur = function(e){
         e.preventDefault();
         errorName.innerText = validateName(name.value);
    }

    name.onfocus = function(e){
         e.preventDefault();
         errorName.innerText = '';    
    }
    
    email.onblur = function(e){
        e.preventDefault();
        errorEmail.innerText = validateEmail(email.value);
    }

    email.onfocus = function(e){
        e.preventDefault();
        errorEmail.innerText = '';    
    }

    area.onblur = function(e){
        e.preventDefault();
        errorArea.innerText = validateArea(area.value); 
        console.log(area.value);
    }

    area.onfocus = function(e){
        e.preventDefault();
        errorArea.innerText = '';    
    }

    message.onblur = function(e){
        e.preventDefault();
        errorMessage.innerText = validateMessage(message.value);     
    }

    message.onfocus = function(e){
        e.preventDefault();
        errorMessage.innerText = '';    
    }

    // Validate fields---------------------------------------------------
    function validateName(n){
         if (n == ''){
            return 'Name can not be empty';
        }
        if (n.length <=3 ){
            return 'Name must have at least 3 characters';
        }

        if (validateCharacters(n) == false){
            return 'Use only character without numbers or spaces'; 
        }
        return '';
    }

    function validateEmail(em){
        if (em == ''){
            return 'E-mail can not be emty';
        }

        var validEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (em.match(validEmail) == null){
            return em + ' Is not a valid email';   
        }
        return '';
    }

    function validateArea(ar){
        if (ar == ''){
            return 'The area field is required';
        }
        return '';
    }

    function validateMessage(msg){
        if (msg == ''){
            return 'The message field is required';
        }
        if (msg.length <=3 ){
            return 'Message field must have more than 3 characters';
        }
        if (validateAlpha(msg) == false){
            return 'Use only character, numbers or spaces'; 
        }
        return '';
    }

    // Validation---------------------------------------------------------------------

    function validateCharacters(str){
        var special = 'äëïöüáéíóúáéíóúâêîôûàèìòùñç';
        for (i=0; i < str.length; i++){
            var c = str.substring(i, i+1).toLowerCase();
            if (((c >= 'a' && c <= 'z') ||  special.lastIndexOf(c) >=0) == false){
                return false;
            }
        }
        return true;
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
}