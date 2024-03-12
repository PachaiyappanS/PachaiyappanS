function ValidateForm(event){
    event.preventDefault()
    var name = document.getElementById('name').value;
    var age = document.getElementById('Age').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var letters = /^[0-9]+$/;

    if(name.trim()=="" || letters.test(name)){
        alert("Please enter Your Name");
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please enter a Valid Email Address");
        return false;
    }

    if(pass.length<6){
        alert("Password must be at least 6 Characters long");
        return false;
    }
    alert("Form Submitted Successfully");
}
