//SideBar
function openNav(){
    document.getElementById("myNav").style.width = '70%';
}

function closeNav(){
    document.getElementById("myNav").style.width = '0'
}

//About
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
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const telefone = '5511940547947';

    const text = `*Novo Contato pelo site*\nOlá, vim através do formulário do seu site.\n\n👤Dados de Contato:\n*Nome:* ${nome} ${sobrenome}\n*E-mail:* ${email}\n\n💬Mensagem:\n*${nome}:* ${message}`;
    const messageFormat = encodeURIComponent(text)

    const url = `https://api.whatsapp.com/send/?phone=${telefone}&text=${messageFormat}`;

    window.open(url, '_blank')
}

