function validate()
{
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;

    var nameExpression= /^[A-Za-z]+$/;
    var emailExpression=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(fName=="" || lName=="" || email=="")
    {
        alert("No fields can be left blank");
        return false;
    }
    else if(!nameExpression.test(fName))
    {
        alert("First name can only contain letters!");
        return false;
    }
    else if(!nameExpression.test(lName))
    {
        alert("Last name can only contain letters!");
        return false;
    }
    else if(!emailExpression.test(email))
    {
        alert("Must enter a valid email!");
        return false;
    }
    else{
        alert("Form submission is successful")
    }

}
