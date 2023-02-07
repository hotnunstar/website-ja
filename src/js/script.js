const oQueFazemos = document.getElementById('oQueFazemos');
const subMenu = document.getElementById('subMenu');
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

oQueFazemos.addEventListener('click', () => {
    subMenu.classList.toggle('flex')
    subMenu.classList.toggle('hidden')
})

window.addEventListener('click', function(e){   
    if (!subMenu.contains(e.target) && !oQueFazemos.contains(e.target))
    {
        subMenu.classList.remove('flex')
        subMenu.classList.add('hidden')
    }
  });

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

//#region Send email
const formName = document.getElementById('floating_name');
const formEmail = document.getElementById('floating_email');
const formPhone = document.getElementById('floating_phone');
const formSpeciality = document.getElementById('speciality_select');
const formDate = document.getElementById('floating_date');
const formHours = document.getElementById('floating_hour');
const formComents = document.getElementById('message');
const formAlert = document.getElementById('formAlert');
const formSuccess = document.getElementById('formSuccess');

var form_id_js = "scheduleForm";
var data_js = {
    "access_token": "t5ujg8f6b1lhsoq2bf2exu5b"
};

var sendButton = document.getElementById("submitForm");
sendButton.onclick = js_send

function js_send() {
    let regex = /[0-9]{9}/
    let match = formPhone.value.match(regex)
    console.log(match)

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
    else if(!formSpeciality.value){
        formSpeciality.focus();
        return false;
    }
    else if(!formDate.value){
        formDate.focus();
        return false;
    }
    else if(!formHours.value){
        formHours.focus();
        return false;
    }
    else if(formName.value && formEmail.value && formPhone.value && formSpeciality.value && formDate.value && formHours.value) {
        sendButton.value='A enviar..';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) js_onSuccess();
            else if(request.readyState == 4) js_onError(request.response);
        };

        var subject = `Agendamento para o dia ${formDate.value}`;
        var message = `Nome: ${formName.value}\nEmail: ${formEmail.value}\nTelefone: ${formPhone.value}\nEspecialidade: ${formSpeciality.value}\nHorário: ${formHours.value}\nComentários: ${formComents.value}`;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);
        return false;
    }
    else return false; 
}

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