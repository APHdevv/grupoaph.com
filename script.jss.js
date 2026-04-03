// ============================================
// LINK DO GRUPO DO WHATSAPP
// ============================================
var WHATSAPP_LINK = "https://chat.whatsapp.com/LAoxLafYFzn8LDQve5YwR1";

// ============================================
// CONTADOR DE VAGAS DA NOVA ONDA
// ============================================
var vagasRestantes = 97;
var contadorElement = document.getElementById('counterDisplay');
var contadorElement2 = document.getElementById('counter');

function atualizarContador() {
    if (contadorElement) {
        contadorElement.textContent = vagasRestantes;
    }
    if (contadorElement2) {
        contadorElement2.textContent = vagasRestantes;
    }
}

setInterval(function() {
    if (vagasRestantes > 5) {
        vagasRestantes = Math.max(5, vagasRestantes - Math.floor(Math.random() * 2) - 1);
        atualizarContador();
    }
}, 45000);

atualizarContador();

// ============================================
// FUNÇÃO PRINCIPAL - SEM POP-UP
// ============================================
function redirecionarParaWhatsApp() {
    var nome = document.getElementById('affiliateName').value;
    var email = document.getElementById('affiliateEmail').value;
    var whats = document.getElementById('affiliateWhatsapp').value;
    
    if (nome === "") {
        alert("⚠️ Digite seu nome completo");
        document.getElementById('affiliateName').focus();
        return false;
    }
    
    if (email === "") {
        alert("⚠️ Digite seu e-mail");
        document.getElementById('affiliateEmail').focus();
        return false;
    }
    
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("⚠️ Digite um e-mail válido");
        document.getElementById('affiliateEmail').focus();
        return false;
    }
    
    if (whats === "") {
        alert("⚠️ Digite seu WhatsApp");
        document.getElementById('affiliateWhatsapp').focus();
        return false;
    }
    
    var numerosWhats = whats.replace(/\D/g, '');
    if (numerosWhats.length < 10) {
        alert("⚠️ Digite um WhatsApp válido com DDD (ex: 11999999999)");
        document.getElementById('affiliateWhatsapp').focus();
        return false;
    }
    
    var dados = {
        nome: nome,
        email: email,
        whatsapp: whats,
        data: new Date().toLocaleString()
    };
    localStorage.setItem('aph_afiliado', JSON.stringify(dados));
    
    window.location.href = WHATSAPP_LINK;
    return false;
}

function carregarDados() {
    var dadosSalvos = localStorage.getItem('aph_afiliado');
    if (dadosSalvos) {
        try {
            var dados = JSON.parse(dadosSalvos);
            if (dados.nome) document.getElementById('affiliateName').value = dados.nome;
            if (dados.email) document.getElementById('affiliateEmail').value = dados.email;
            if (dados.whatsapp) document.getElementById('affiliateWhatsapp').value = dados.whatsapp;
        } catch(e) {}
    }
}

window.onload = function() {
    carregarDados();
    
    var botao = document.getElementById('btnEntrarGrupo');
    if (botao) {
        botao.onclick = function(e) {
            e.preventDefault();
            redirecionarParaWhatsApp();
            return false;
        };
    }
};