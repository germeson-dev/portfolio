var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Form
function envwpp(event){
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const telefone = '5511940547947';

    const text = `Nome: *${nome}*:\nE-mail: ${email} \n\n${message}`;

    const messageFormat = encodeURIComponent(text)

    const url = `https://api.whatsapp.com/send/?phone=${telefone}&text=${messageFormat}`;

    window.open(url, '_blank')
}

