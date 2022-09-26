window.onload = function(){

    var buttonHome = document.getElementById('buttonHome').addEventListener('click', clickButtonHome);
    function clickButtonHome(e){
        document.location.href = 'index.html';
    }

    var button = document.getElementById('button');

    // var firstName = document.getElementById('firstName');
    // var errorFirstName = document.getElementById('errorFirstName');

    // var lastName = document.getElementById('lasName');
    // var errorLastName = document.getElementById('errorLastName');

    // var dateOfBirth = document.getElementById('dateOfBirth');
    // var errorDateOfBirth = document.getElementById('errorDateOfBirth');

    var phone = document.getElementById('phone');
    var errorPhone = document.getElementById('errorPhone');
    
    var address = document.getElementById('address');
    var errorAddress = document.getElementById('errorAddress');
    
    var city = document.getElementById('city');
    var errorCity = document.getElementById('errorCity');

    var zipCode = document.getElementById('zipCode');
    var errorZipCode = document.getElementById('errorZipCode');
    
    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');

    var password= document.getElementById('password');
    var errorPassword = document.getElementById('errorPassword');

    var repeatPassword= document.getElementById('repeatPassword');
    var errorRepeatPassword = document.getElementById('errorRepeatPassword');

   

    button.onclick = function(e){
        e.preventDefault();

        var str;

        // str = validateFirstName(firstName.value);
        // if (str.length > 0){
        //     alert(str);
        //     return;
        // }

        // str = validateLastName(lastName.value);
        // if (str.length > 0){
        //     alert(str);
        //     return;
        // }

        // str = validateDateOfBirth(dateOfBirth.value);
        // if (str.length > 0){
        //     alert(str);
        //     return;
        // }

        str = validatePhone(phone.value);
        if (str.length > 0){
            alert(str);
            return;
        }
        
        str = validateAddress(address.value);
        if (str.length > 0){
            alert(str);
            return;
        }
        
        str = validateCity(city.value);
        if (str.length > 0){
            alert(str);
            return;
        }

        str = validateZipCode(zipCode.value);
        if (str.length > 0){
            alert(str);
            return;
        }

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

        str = validateRepeatPassword(repeatPassword.value)
        if (str.length >0){
            alert(str);
            return;
        }

        if (phone.value == '(+598) 92756473' && address.value == 'Charrua 2260' && city.value == 'Montevideo' && zipCode.value == '11600' && email.value.toLowerCase() == 'petra_arcia@gigatech.com' && password.value == 'milanesa123' && repeatPassword.value == 'milanesa123'){
            alert('login succesful with ' + phone.value + '/' + address.value + '/' + city.value + '/' + zipCode.value + '/' + email.value + '/' + password.value + + '/' + repeatPassword.value);
            return;
        }

        alert('email or password invalid');
        console.log(email.value, password.value, repeatPassword.value);
    }

    
    // firstName.onblur = function(e){
    //     e.preventDefault();
    //     errorFirstName.innerText = validateFirstName(firstName.value);
    // }

    // firstName.onfocus = function(e){
    //     e.preventDefault();
    //     errorFirstName.innerText = '';    
    // }

    // lastName.onblur = function(e){
    //     e.preventDefault();
    //     errorLastName.innerText = validateLastName(lastName.value);
    // }

    // lastName.onfocus = function(e){
    //     e.preventDefault();
    //     errorLastName.innerText = '';    
    // }

    // dateOfBirth.onblur = function(e){
    //     e.preventDefault();
    //     errorDateOfBirth.innerText = validateDateOfBirth(dateOfBirth.value);
    // }

    // dateOfBirth.onfocus = function(e){
    //     e.preventDefault();
    //     errorDateOfBirth.innerText = '';    
    // }

    phone.onblur = function(e){
        e.preventDefault();
        errorPhone.innerText = validatePhone(phone.value);
    }

    phone.onfocus = function(e){
        e.preventDefault();
        errorPhone.innerText = '';    
    }
    
    address.onblur = function(e){
        e.preventDefault();
        errorAddress.innerText = validateAddress(address.value);
    }

    address.onfocus = function(e){
        e.preventDefault();
        errorAddress.innerText = '';    
    }
    
    city.onblur = function(e){
        e.preventDefault();
        errorCity.innerText = validateCity(city.value);
    }

    city.onfocus = function(e){
        e.preventDefault();
        errorCity.innerText = '';    
    }

    zipCode.onblur = function(e){
        e.preventDefault();
        errorZipCode.innerText = validateZipCode(zipCode.value);
    }

    zipCode.onfocus = function(e){
        e.preventDefault();
        errorZipCode.innerText = '';    
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

    repeatPassword.onblur = function(e){
        e.preventDefault();
        errorRepeatPassword.innerText = validateRepeatPassword(repeatPassword.value);     
    }

    repeatPassword.onfocus = function(e){
        e.preventDefault();
        errorRepeatPassword.innerText = '';    
    }

    // function validateFirstName(fn){
    //     if (fn == ''){
    //         return 'first name can not be empty';
    //     }
    //     return '';
    // }

    // function validateLastName(ln){
    //     if (ln == ''){
    //         return 'last name can not be empty';
    //     }
    //     return '';
    // }

    // function validateDateOfBirth(dob){
    //     if (dob == ''){
    //         return 'date of birth can not be empty';
    //     }
    //     return '';
    // }

    function validatePhone(p){
        if (p == ''){
            return 'phone can not be empty';
        }
        return '';
    }
    
    function validateAddress(ad){
        if (ad == ''){
            return 'address can not be empty';
        }
        return '';
    }
    
    function validateCity(ct){
        if (ct == ''){
            return 'city can not be empty';
        }
        return '';
    }
    
    function validateZipCode(zc){
        if (zc == ''){
            return 'zip code can not be empty';
        }
        return '';
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

    function validateRepeatPassword(rpas){
        if (rpas == ''){
            return 'repeat password can not be empty';
        }
        return '';
    }
}