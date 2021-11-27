function changeType(){
    var target=document.getElementById("triptype").selectedIndex;
    
    var sel=document.getElementsByName("rettime")
    for(i=0;i<sel.length;i++)
    {
        if (target=="1")
        {
            sel[i].disabled=false;
        }
        else{
            sel[i].disabled=true;
        }
    }
}
validateSRadio();

function oksubmit(form){
    if(validateRadio() && validateSRadio() && validateFName(form) && validateLName(form) && validateEmail(form) && validateNum(form)){
        alert("Form submitted successfully!");
        return true;
    }
    else{
        return false;
    }
}

function validateRadio(){
    var fr=document.querySelectorAll('input[name="deptime"]:checked');
    var ot=document.getElementById("deptime");

    if(fr.length!=0){
        ot.setCustomValidity("");
        return true;
    }
    else{
        ot.setCustomValidity("Please select departure time");
        return false;
    }
}
function validateFName(form){
    var fr= form.elements["firstName"];

    if(fr.validity.valueMissing){
        fr.setCustomValidity("Please enter your first name");
        return false;
    }
    else{
        fr.setCustomValidity("");
        return true;
    }
}
function validateLName(form){
    var fr= form.elements["lastName"];

    if(fr.validity.valueMissing){
        fr.setCustomValidity("Please enter your last name");
        return false;
    }
    else{
        fr.setCustomValidity("");
        return true;
    }
}
function validateEmail(form){
    var fr= form.elements["emailAdd"];

    if(fr.validity.valueMissing){
        fr.setCustomValidity("Please enter your email address");
        return false;
    }
    else if(fr.validity.typeMismatch){
        fr.setCustomValidity("Email "+fr.value+" is not in a correct format");
        return false;
    }
    else{
        fr.setCustomValidity("");
        return true;
    }
}

function validateSRadio(){
    var fr=document.querySelectorAll('input[name="rettime"]:checked');
    var ot=document.getElementById("rettime");

    if(fr.length!=0){
        ot.setCustomValidity("");
        return true;
    }
    else{
        ot.setCustomValidity("Please select return time");
        return false;
    }
}
function validateNum(form){
    var fr= form.elements["phno"];

    if(fr.validity.valueMissing){
        fr.setCustomValidity("Please enter your phone number");
        return false;
    }
    else if(fr.validity.patternMismatch){
        fr.setCustomValidity("Please enter the 10 digits phone number");
        return false;
    }
    else{
        fr.setCustomValidity("");
        return true;
    }
}