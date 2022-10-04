window.onload = function(){

    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modalText");
    var span = document.getElementsByClassName("close")[0];
 
     function showModal(text){
         modalText.innerText = text;
         modal.style.display = "block";
     }
 
    span.onclick = function() {
        modal.style.display = "none";
        }
 
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

     var buttonHome = document.getElementById('buttonHome').addEventListener('click', clickButtonHome);
     function clickButtonHome(e){
         document.location.href = 'index.html';
    }

    var button = document.getElementById('button');

    var firstName = document.getElementById('firstName');
    var errorFirstName = document.getElementById('errorFirstName');

    var lastName = document.getElementById('lastName');
    var errorLastName = document.getElementById('errorLastName');

    var dni = document.getElementById('dni');
    var errorDni = document.getElementById('errorDni');

    var dateOfBirth = document.getElementById('dateOfBirth');
    var errorDateOfBirth = document.getElementById('errorDateOfBirth');

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

    if(localStorage.getItem('name')!=null){    
        firstName.value = localStorage.getItem('name');
        lastName.value = localStorage.getItem('lastName');
        dni.value = localStorage.getItem('dni');
        dateOfBirth.value = localStorage.getItem('dob');
        phone.value = localStorage.getItem('phone');
        address.value = localStorage.getItem('address');
        city.value = localStorage.getItem('city');
        zipCode.value = localStorage.getItem('zip');
        email.value = localStorage.getItem('email');
        password.value = localStorage.getItem('password');
        repeatPassword.value = password.value;   
    }

    var hide1 = document.getElementById('hide1');
    hide1.onclick = function(e){
        e.preventDefault();
        if (password.type=="password"){
            password.type="text";
        } else {
            password.type="password";
        }
    }

    var hide2 = document.getElementById('hide2');
    hide2.onclick = function(e){
        e.preventDefault();
        if (repeatPassword.type=="password"){
            repeatPassword.type="text";
        } else {
            repeatPassword.type="password";
        }
    }

    button.onclick = function(e){
        e.preventDefault();

        var str ='';
        str += lineBreak(validateFirstName(firstName.value));
        str += lineBreak(validateLastName(lastName.value));
        str += lineBreak(validateDni(dni.value));
        str += lineBreak(validateDateOfBirth(dateOfBirth.value));
        str += lineBreak(validatePhone(phone.value));
        str += lineBreak(validateAddress(address.value));
        str += lineBreak(validateCity(city.value));
        str += lineBreak(validateZipCode(zipCode.value));
        str += lineBreak(validateEmail(email.value));
        str += lineBreak(validatePassword(password.value));
        str += lineBreak(validateRepeatPassword(repeatPassword.value, password.value));

        if (str != ''){
            showModal(str);
            return;
        }

        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
        url+='name=' + firstName.value; 
        url+='&lastName=' + lastName.value;
        url+='&dni=' + dni.value;
        url+='&dob=' + formatDate(dateOfBirth.value);
        url+='&phone=' + phone.value;
        url+='&address='  + address.value; 
        url+='&city=' + city.value;
        url+='&zip=' + zipCode.value;
        url+='&email=' + email.value;
        url+='&password=' + password.value;

        var promise = fetch(url);
 
        promise
        .then(function (res){
            return res.json();
        })
        .then(function (data){
            
            if (data.success == true){ 

                localStorage.setItem('name', firstName.value);
                localStorage.setItem('lastName', lastName.value);
                localStorage.setItem('dni', dni.value);
                localStorage.setItem('dob', dateOfBirth.value);
                localStorage.setItem('phone', phone.value);
                localStorage.setItem('address', address.value);
                localStorage.setItem('city', city.value);
                localStorage.setItem('zip', zipCode.value);
                localStorage.setItem('email', email.value);
                localStorage.setItem('password', password.value);       

                showModal('SUCCESS: ' + data.msg);
            } else {
                var errors = data.errors;
                showModal('ERROR: ' + errors[0].msg);
            }
        })
        .catch(function (error){
            showModal(error);
        })
    }

    firstName.onblur = function(e){
         e.preventDefault();
         errorFirstName.innerText = validateFirstName(firstName.value);
    }

    firstName.onfocus = function(e){
         e.preventDefault();
         errorFirstName.innerText = '';    
    }

    lastName.onblur = function(e){
        e.preventDefault();
        errorLastName.innerText = validateLastName(lastName.value);
    }

    lastName.onfocus = function(e){
        e.preventDefault();
        errorLastName.innerText = '';    
    }

    dni.onblur = function(e){
        e.preventDefault();
        errorDni.innerText = validateDni(dni.value);
    }

    dni.onfocus = function(e){
        e.preventDefault();
        errorDni.innerText = '';    
    }

    dateOfBirth.onblur = function(e){
        e.preventDefault();
        errorDateOfBirth.innerText = validateDateOfBirth(dateOfBirth.value);
    }

    dateOfBirth.onfocus = function(e){
       e.preventDefault();
        errorDateOfBirth.innerText = '';    
    }

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
        errorRepeatPassword.innerText = validateRepeatPassword(repeatPassword.value, password.value);     
    }

    repeatPassword.onfocus = function(e){
        e.preventDefault();
        errorRepeatPassword.innerText = '';    
    }
    function validateFirstName(fn){
         if (fn == ''){
            return 'First name can not be empty';
        }
        if (fn.length <=3 ){
            return 'First name must have at least 3 characters';
        }

        if (validateCharacters(fn) == false){
            return 'Use only character without numbers or spaces'; 
        }
        return '';
    }

    function validateLastName(ln){
        if (ln == ''){
            return 'Last name can not be empty';
        }

        if (ln.length <=3 ){
            return 'Last name must have at least 3 characters';
        }

        if (validateCharacters(ln) == false){
            return 'Use only character without numbers or spaces'; 
        }
        return '';
    }

    function validateDni(dni){
        if (dni == ''){
           return 'DNI can not be empty';
       }
       if (dni.length <7 || dni.length >8 ){
           return 'DNI must have between 7 and 8 numbers';
       }
       if (validateNumbers(dni) == false){
        return 'Use only numbers'; 
        }
       return '';
   }

    function validateDateOfBirth(dt){
        if (dt == ''){
            return 'Date can not be empty';
        }
        return '';
    }

    function validatePhone(p){
        if (p == ''){
            return 'Phone can not be empty';
        }
        if (p.length <=9 ){
            return 'Phone number must have at least 10 characters';
        }
        if (validateNumbers(p) == false){
            return 'Use only numbers'; 
        }
        return '';
    }
    
    function validateAddress(ad){
        if (ad == ''){
            return 'Address can not be empty';
        }

        if (ad.length <=5 ){
            return 'Address must have at least 5 characters';
        }
        
        if (validateAlpha(ad) == false){
            return 'Use only character, numbers or spaces'; 
        }
        
        if (haveCharacters(ad)== false){
            return 'Must have at least one character';
        }

        if (haveNumbers(ad)==false){
            return 'Must have at least one number';
        }

        if (haveSpaces(ad)==false){
            return 'Must have at least one space';
        }
        
        return '';
    }
    
    function validateCity(ct){
        if (ct == ''){
            return 'City can not be empty';
        }
        if (ct.length <=3 ){
            return 'City must have more than 3 characters';
        }
        if (validateAlpha(ct) == false){
            return 'Use only character, numbers or spaces'; 
        }
        return '';
    }
    
    function validateZipCode(zc){
        if (zc == ''){
            return 'Zip code can not be empty';
        }
        if (validateNumbers(zc)==false){
            return 'Use only number';
        }
        if (zc.length <4 || zc.length >5){
            return 'Must contain between 4 and 5 numbers';
        }
        return '';
    }

    function validateEmail(em){
        if (em == ''){
            return 'Email can not be emty';
        }

        var validEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (em.match(validEmail) == null){
            return em + ' is not a valid email';   
        }
        return '';
    }

    function validatePassword(pas){
        if (pas == ''){
            return 'Password can not be empty';
        }
        if (pas.length <8 ){
            return 'Password must have more than 8 characters';
        }
        if (validateAlpha(pas) == false){
            return 'Use only character and numbers'; 
        }
        if (haveSpaces(pas)){
            return 'Password can not hace spaces';
        }
        if (haveNumbers(pas) == false){
            return 'Must have numbers';
        }
        if (haveCharacters(pas) == false){
            return 'Must have at lease one character'
        }
        return '';
    }

    function validateRepeatPassword(rpas,pas){
        if (rpas == ''){
            return 'Repeat password can not be empty';
        }
        if (rpas != pas){
            return 'Password do not match'
        }
        return '';
    }

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

    function validateNumbers(str){
        for (i=0; i < str.length; i++){
            var c = str.substring(i, i+1);
            if ((c >= '0' && c <= '9')  == false){
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

    function formatDate(date) {
        var d = new Date(date);
        return (d.getMonth() + 1).toString().padStart(2, '0') + '/' + d.getDate().toString().padStart(2, '0') + '/' +   d.getFullYear();
      }

      function lineBreak(text){
        if (text==''){
            return '';
        }
        return text + "\n";
      }
}