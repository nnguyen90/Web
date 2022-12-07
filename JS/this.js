window.onload = function () {

    const resume = document.getElementById('download');

    resume.onclick = function () {
        function download(url) {
            const a = document.createElement('a')
            a.href = url
            a.download = url
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        }
        download('resume.docx');
    }

    const contacts = document.getElementById('contact');

    contacts.onclick = function () {
        window.location.href = '#id1';
    }

    const other = document.getElementById("o");

    other.onclick = function(){
        document.getElementById("hid").hidden = false;
    }

    const school = document.getElementById("s");
    school.onclick = function()
    {
     
        document.getElementById("hid").hidden = true;

    }

    const job = document.getElementById("j");
    job.onclick = function(){
        document.getElementById("hid").hidden = true;
    }
}

function validateInput() {
    const name = document.getElementById('nam');
    const email = document.getElementById('e');
    const city = document.getElementById("cit");
    const postalcode = document.getElementById("post");
    const phonenumber = document.getElementById("phone");

    const words = /^[a-zA-Z ]{2,30}$/;
    const validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const vaildpostal = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/;
    const validphone = /^([0-9]{3})[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

    if (name.value.trim() == "") {
        alert("Name can't NOT be empty!");
        return false;
    }

    if (!words.test(name.value)) {
        alert("Not a valid name!");
        return false;
    }

    if (email.value.trim() == "") {
        alert("Email can't NOT be empty!");
        return false;
    }
    if (!validemail.test(email.value)) {
        alert("Not a valid email!");
        return false;
    }

    if (city.value.trim() == "") {
        alert("City can't NOT be empty!");
        return false;
    }

    if (!words.test(city.value)) {
        alert("Not a valid city!");
        return false;
    }

    if (postalcode.value.trim() == "") {
        alert("Postal Code can't NOT be empty!");
        return false;
    }

    if (!vaildpostal.test(postalcode.value)) {
        alert("Not a valid postal code!");
        return false;
    }

    if (phonenumber.value.trim() == "") {
        alert("Phone number can't NOT be empty!");
        return false;
    }
    if(!validphone.test(phonenumber.value))
    {
        alert("Not a valid phone number!");
        return false;
    }
    return true;
}
