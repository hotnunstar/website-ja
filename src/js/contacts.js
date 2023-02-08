//#region Send Contact Email
const formName = document.getElementById('contact_name');
const formEmail = document.getElementById('contact_email');
const formPhone = document.getElementById('contact_phone');
const formComents = document.getElementById('contact_message');
const formAlert = document.getElementById('contactAlert');
const formSuccess = document.getElementById('contactSuccess');

var form_id_js = "contactForm";
var data_js = {
    "access_token": "t5ujg8f6b1lhsoq2bf2exu5b"
};

var sendButton = document.getElementById("submitContact");
sendButton.addEventListener("click", function(){
    let regex = /[0-9]{9}/
    let match = formPhone.value.match(regex)

    if(!formName.value){
        formName.focus();
        return false;
    } 
    else if(!formEmail.value){
        formEmail.focus();
        return false;
    }
    else if(match == null) {  
        formPhone.value = "";
        formPhone.focus();
        return false;
    }
    else if(!formPhone.value){
        formPhone.focus();
        return false;
    }
    else if(!formComents.value){
        formComents.focus();
        return false;
    }
    else if(formName.value && formEmail.value && formPhone.value && formComents.value) {
        sendButton.value='A enviar..';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) js_onSuccess();
            else if(request.readyState == 4) js_onError(request.response);
        };

        var subject = `Contacto de ${formName.value}`;
        var message = `Nome: ${formName.value}\nEmail: ${formEmail.value}\nTelefone: ${formPhone.value}\nMensagem: ${formComents.value}`;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);
        return false;
    }
    else return false; 
});

function js_onSuccess() {
    sendButton.value='Enviado!';
    sendButton.disabled=true;  
    formSuccess.classList.remove('hidden');
}

function js_onError() {
    formAlert.classList.remove('hidden');
    setTimeout(function(){
        formAlert.classList.add('hidden');
    }, 500);
}

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }
    return form_data.join("&");
}
var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});
//#endregion