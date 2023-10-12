function validateForm() {
    if (document.forms["login"]["email"].value == "") {
        alert("Please fill your Email");
        document.forms["login"]["email"].focus();
        return false;
    }
    if (document.forms["login"]["password"].value == "") {
        alert("Please Fill your password");
        document.forms["login"]["password"].focus();
        return false;
    }
}