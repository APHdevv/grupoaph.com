// ============================================
// EMAILJS - CONFIGURAÇÃO CORRETA
// ============================================
// 🔴 ATENÇÃO: Substitua pelos seus dados reais do EmailJS
// Você precisa criar uma conta em https://www.emailjs.com/
// e obter:
// 1. Public Key (Account > API Keys)
// 2. Service ID (Email Services)
// 3. Template ID (Email Templates)

(function() {
    emailjs.init({
        publicKey: "oKu66F1cdvlI67dt4", // 🔴 SUA PUBLIC KEY
    });
})();

// ============================================
// DADOS DOS DEPOIMENTOS
// ============================================
const storiesData = [
    {
        nome: "Carlos",
        idade: "34 anos",
        cidade: "SP",
        texto: "Cara, eu tava no fundo do poço. Devendo até as cueca. Esse método me ensinou a organizar minha mente e minhas finanças. Hoje tô zerado e com reserva. Minha mulher até comentou que eu mudei, tô mais seguro. Recomendo demais.",
        resultado: "Saiu do vermelho em 45 dias",
        foto: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        nome: "Rodrigo",
        idade: "28 anos",
        cidade: "RJ",
        texto: "Sempre fui o cara que ficava calado nas reuniões, com medo de falar merda. Depois que entendi os pilares de posicionamento, minha vida mudou. Fui promovido em 3 meses. Me sinto outro homem.",
        resultado: "Promovido 3 meses após aplicar",
        foto: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        nome: "Felipe",
        idade: "41 anos",
        cidade: "MG",
        texto: "Aos 40 anos, me sentia um fracassado. Comparava com os outros, invejava quem conquistava as coisas. Esse guia me fez entender que eu estava olhando pro lado errado. Hoje tenho meu negócio e sou respeitado pela família.",
        resultado: "Abriu o próprio negócio",
        foto: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        nome: "Thiago",
        idade: "26 anos",
        cidade: "PR",
        texto: "Não sabia pra onde ia, vivia no automático. O método me deu clareza. Montei metas reais, parei de procrastinar. Em 60 dias, consegui algo que tentava há 2 anos.",
        resultado: "Realizou meta de 2 anos em 60 dias",
        foto: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        nome: "Juliana",
        idade: "32 anos",
        cidade: "RS",
        texto: "Comprei pro meu marido que tava desanimado, sem postura. Em 1 mês, ele já tava diferente. Mais confiante, mais presente. Até a libido melhorou! Valeu cada centavo.",
        resultado: "Marido transformado em 30 dias",
        foto: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        nome: "Eduardo",
        idade: "37 anos",
        cidade: "DF",
        texto: "Eu já lia muito, mas não aplicava nada. O sistema APH me fez sair da teoria pra prática. Comecei a tomar decisões melhores, inclusive financeiras. Resultado? Comprei meu primeiro imóvel esse ano.",
        resultado: "Primeiro imóvel conquistado",
        foto: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        nome: "Ricardo",
        idade: "29 anos",
        cidade: "PE",
        texto: "Sofria demais com pressão no trabalho. Qualquer cobrança me travava. Depois do método, aprendi a me posicionar. Hoje lido com cliente grande sem tremer a voz. Meus colegas respeitam minha opinião.",
        resultado: "Promovido a líder de equipe",
        foto: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
        nome: "Marcos",
        idade: "33 anos",
        cidade: "GO",
        texto: "Tava perdido, sem objetivos. Esse guia foi um tapa na cara (no bom sentido). Aprendi a definir metas de verdade. Hoje tenho plano de crescimento pra 5 anos. Minha esposa me apoia porque vê que tô focado.",
        resultado: "Plano de 5 anos estruturado",
        foto: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        nome: "Leonardo",
        idade: "45 anos",
        cidade: "SC",
        texto: "Na minha idade, achei que já era tarde pra mudar. O método mostrou que não. Aprendi sobre dinheiro, sobre postura. Meus filhos notaram a diferença. É como se eu tivesse renascido.",
        resultado: "Relacionamento familiar restaurado",
        foto: "https://randomuser.me/api/portraits/men/12.jpg"
    }
];

// ============================================
// DADOS DAS FRASES FAMOSAS
// ============================================
const quotesData = [
    {
        texto: "Não importa o quanto você bata, o que importa é o quanto você aguenta apanhar e continuar seguindo em frente. É assim que se vence.",
        autor: "Rocky Balboa",
        fonte: "Rocky (1976)",
        icone: "fa-film"
    },
    {
        texto: "O dinheiro não é a minha motivação. É apenas um marcador. A verdadeira recompensa é olhar para trás e ver que você venceu.",
        autor: "Jordan Belfort",
        fonte: "O Lobo de Wall Street",
        icone: "fa-chart-line"
    },
    {
        texto: "O que você faz hoje pode melhorar todos os seus amanhãs. É sobre ser melhor do que ontem. É sobre nunca desistir.",
        autor: "Adonis Creed",
        fonte: "Creed (2015)",
        icone: "fa-bolt"
    },
    {
        texto: "Qualidade nunca é um acidente. É sempre o resultado de esforço inteligente. Nada vale a pena se não for construído com determinação.",
        autor: "Ray Kroc",
        fonte: "Fome de Poder (The Founder)",
        icone: "fa-burger"
    },
    {
        texto: "A única coisa que fica entre você e seu sonho é a vontade de tentar e a crença de que é realmente possível.",
        autor: "Joel Brown",
        fonte: "best-seller mundial",
        icone: "fa-crown"
    },
    {
        texto: "O homem não é produto de suas circunstâncias. O homem é produto de suas decisões.",
        autor: "Stephen Covey",
        fonte: "Os 7 Hábitos (40 milhões de cópias)",
        icone: "fa-hand-fist"
    },
    {
        texto: "Quando você quer alguma coisa, todo o universo conspira para que você realize seu desejo.",
        autor: "Paulo Coelho",
        fonte: "O Alquimista (150 milhões de cópias)",
        icone: "fa-gem"
    },
    {
        texto: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.",
        autor: "Charles Darwin",
        fonte: "A Origem das Espécies",
        icone: "fa-brain"
    },
    {
        texto: "Aquele que conquista os outros é forte. Aquele que conquista a si mesmo é poderoso.",
        autor: "Lao Tsé",
        fonte: "Tao Te Ching",
        icone: "fa-shield-alt"
    },
    {
        texto: "Torna-te aquilo que és.",
        autor: "Friedrich Nietzsche",
        fonte: "Assim Falou Zaratustra",
        icone: "fa-feather-alt"
    },
    {
        texto: "O homem que sabe o 'porquê' de viver, suporta quase qualquer 'como'.",
        autor: "Viktor Frankl",
        fonte: "Em Busca de Sentido (16 milhões de cópias)",
        icone: "fa-heart"
    },
    {
        texto: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
        autor: "Winston Churchill",
        fonte: "Prêmio Nobel de Literatura",
        icone: "fa-chart-line"
    }
];

let visibleStories = 6;

// ============================================
// CARREGAR HISTÓRIAS
// ============================================
function loadStories() {
    const container = document.getElementById('storiesGrid');
    if (!container) return;
    
    const storiesToShow = storiesData.slice(0, visibleStories);
    
    container.innerHTML = storiesToShow.map(story => `
        <div class="story-card">
            <div class="story-header">
                <img src="${story.foto}" alt="${story.nome}">
                <div class="story-info">
                    <h4>${story.nome}, ${story.idade}</h4>
                    <span>${story.cidade}</span>
                </div>
            </div>
            <div class="story-text">"${story.texto}"</div>
            <div class="story-result">
                <i class="fas fa-trophy"></i> ${story.resultado}
            </div>
        </div>
    `).join('');
    
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        if (visibleStories >= storiesData.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// ============================================
// CARREGAR FRASES FAMOSAS
// ============================================
function loadQuotes() {
    const container = document.getElementById('quotesGrid');
    if (!container) return;
    
    container.innerHTML = quotesData.map(quote => `
        <div class="quote-card">
            <div class="quote-icon">
                <i class="fas ${quote.icone}"></i>
            </div>
            <div class="quote-text">"${quote.texto}"</div>
            <div class="quote-author">
                <i class="fas fa-user"></i>
                <div>
                    <strong>${quote.autor}</strong>
                    <span>${quote.fonte}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// CARREGAR MAIS HISTÓRIAS
// ============================================
const loadMoreBtn = document.getElementById('loadMore');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        visibleStories = storiesData.length;
        loadStories();
    });
}

// ============================================
// CONTADOR DE BÔNUS (ESCASSEZ)
// ============================================
let remainingBonus = 47;
const counterElement = document.getElementById('counter');

function updateCounter() {
    if (counterElement) {
        counterElement.textContent = remainingBonus;
    }
}

setInterval(() => {
    if (remainingBonus > 3) {
        const decrease = Math.floor(Math.random() * 3) + 1;
        remainingBonus = Math.max(3, remainingBonus - decrease);
        updateCounter();
    }
}, 30000);

// ============================================
// MODAL DE COMPRA
// ============================================
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');

function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function redirectToPayment() {
    window.open('https://pay.kiwify.com.br/xmnJvNs?afid=wjhfUALO', '_blank');
    closeModalFunc();
}

// ============================================
// BOTÕES DE COMPRA
// ============================================
const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModal();
    });
});

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', redirectToPayment);
}

// ============================================
// MODAL DE SUCESSO (AUTOAVALIAÇÃO)
// ============================================
const successModal = document.getElementById('successModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');

function openSuccessModal(userName, userEmail, mainIssue) {
    const nameDisplay = document.getElementById('userNameDisplay');
    const emailDisplay = document.getElementById('userEmailDisplay');
    const issueDisplay = document.getElementById('mainIssue');
    
    if (nameDisplay) nameDisplay.textContent = userName;
    if (emailDisplay) emailDisplay.textContent = userEmail;
    if (issueDisplay) issueDisplay.textContent = mainIssue;
    
    successModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeSuccessModalFunc() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (closeSuccessModal) {
    closeSuccessModal.addEventListener('click', closeSuccessModalFunc);
}

// ============================================
// MODAL DE CONFIRMAÇÃO (CONTEÚDO SECRETO)
// ============================================
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmationModal = document.getElementById('closeConfirmationModal');

function openConfirmationModal(userName, userEmail) {
    const confirmName = document.getElementById('confirmUserName');
    const confirmEmail = document.getElementById('confirmUserEmail');
    
    if (confirmName) confirmName.textContent = userName;
    if (confirmEmail) confirmEmail.textContent = userEmail;
    
    confirmationModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeConfirmationModalFunc() {
    confirmationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (closeConfirmationModal) {
    closeConfirmationModal.addEventListener('click', closeConfirmationModalFunc);
}

// ============================================
// FUNÇÃO PARA ENVIAR E-MAIL REAL - CONTEÚDO PREMIUM
// ============================================
async function sendWelcomeEmail(userName, userEmail, mainIssue) {
    const paymentLink = 'https://pay.kiwify.com.br/xmnJvNs?afid=wjhfUALO';
    
    // CONTEÚDO DO E-MAIL PREMIUM E ESTRUTURADO
    const emailContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>APH - Seu presente exclusivo</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #0a0a1a;
                    font-family: 'Inter', Arial, sans-serif;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #0a0a1a;
                    border-radius: 32px;
                    overflow: hidden;
                    border: 1px solid rgba(0, 102, 204, 0.2);
                }
                .email-header {
                    background: linear-gradient(135deg, #0066CC 0%, #3399FF 100%);
                    padding: 48px 32px;
                    text-align: center;
                }
                .header-badge {
                    display: inline-block;
                    background: rgba(255,255,255,0.1);
                    padding: 12px 24px;
                    border-radius: 60px;
                    margin-bottom: 24px;
                }
                .header-badge span {
                    color: #ffffff;
                    font-weight: 600;
                    letter-spacing: 2px;
                }
                .email-header h1 {
                    color: #ffffff;
                    font-size: 32px;
                    margin: 0 0 16px;
                    font-weight: 700;
                }
                .email-header p {
                    color: rgba(255,255,255,0.9);
                    font-size: 16px;
                    margin: 0;
                }
                .email-content {
                    padding: 48px 32px;
                    background: #0a0a1a;
                }
                .greeting-box {
                    text-align: center;
                    margin-bottom: 32px;
                }
                .greeting-tag {
                    display: inline-block;
                    background: rgba(0, 102, 204, 0.15);
                    padding: 8px 20px;
                    border-radius: 60px;
                    margin-bottom: 24px;
                }
                .greeting-tag span {
                    color: #0066CC;
                    font-weight: 500;
                }
                .greeting-box h2 {
                    color: #ffffff;
                    font-size: 28px;
                    margin: 0 0 8px;
                }
                .greeting-box p {
                    color: #8a8a9e;
                    font-size: 16px;
                }
                .diagnostic-box {
                    background: rgba(0, 102, 204, 0.05);
                    border-radius: 24px;
                    padding: 32px;
                    margin-bottom: 32px;
                    border-left: 4px solid #0066CC;
                }
                .diagnostic-box p {
                    color: #e0e0ec;
                    font-size: 16px;
                    line-height: 1.6;
                    margin: 0;
                }
                .diagnostic-box strong {
                    color: #0066CC;
                }
                .ebook-premium {
                    background: linear-gradient(135deg, rgba(0,102,204,0.1) 0%, rgba(51,153,255,0.05) 100%);
                    border-radius: 24px;
                    padding: 32px;
                    margin-bottom: 32px;
                    text-align: center;
                }
                .ebook-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                }
                .ebook-premium h3 {
                    color: #ffffff;
                    margin: 16px 0 8px;
                }
                .ebook-premium p {
                    color: #8a8a9e;
                    margin-bottom: 24px;
                }
                .errors-list {
                    background: rgba(0,0,0,0.3);
                    border-radius: 16px;
                    padding: 20px;
                    margin: 20px 0;
                    text-align: left;
                }
                .error-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 16px;
                }
                .error-number {
                    width: 32px;
                    height: 32px;
                    background: #0066CC;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                }
                .error-text {
                    color: #ffffff;
                }
                .btn-primary-email {
                    display: block;
                    background: linear-gradient(135deg, #0066CC 0%, #3399FF 100%);
                    color: #ffffff;
                    text-decoration: none;
                    text-align: center;
                    padding: 16px 24px;
                    border-radius: 60px;
                    font-weight: 600;
                    transition: all 0.3s;
                    margin: 20px 0;
                }
                .btn-primary-email:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0,102,204,0.3);
                }
                .btn-secondary-email {
                    display: inline-block;
                    background: transparent;
                    border: 2px solid #0066CC;
                    color: #0066CC;
                    text-decoration: none;
                    padding: 14px 32px;
                    border-radius: 60px;
                    font-weight: 600;
                    text-align: center;
                    transition: all 0.3s;
                }
                .btn-secondary-email:hover {
                    background: #0066CC;
                    color: #ffffff;
                }
                .email-footer {
                    text-align: center;
                    padding: 32px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .email-footer p {
                    color: #5a5a6e;
                    font-size: 12px;
                    margin: 8px 0;
                }
                .highlight-blue {
                    color: #0066CC;
                    font-weight: 600;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <!-- Header Premium -->
                <div class="email-header">
                    <div class="header-badge">
                        <span>✦ APH ✦</span>
                    </div>
                    <h1>Homens com Poder Absoluto</h1>
                    <p>O método que transforma homens comuns em referências</p>
                </div>
                
                <!-- Conteúdo Principal -->
                <div class="email-content">
                    <div class="greeting-box">
                        <div class="greeting-tag">
                            <span>✦ CONTEÚDO EXCLUSIVO ✦</span>
                        </div>
                        <h2>Olá, ${userName}!</h2>
                        <p>Seu material exclusivo chegou</p>
                    </div>
                    
                    <div class="diagnostic-box">
                        <p>Você solicitou acesso ao <strong>"Conteúdo Secreto: Os 3 Maiores Erros que Impedem Homens de Serem Respeitados"</strong>. Preparamos um material exclusivo para você começar sua jornada de transformação.</p>
                    </div>
                    
                    <div class="ebook-premium">
                        <div class="ebook-icon">
                            📘
                        </div>
                        <h3>Os 3 Maiores Erros</h3>
                        <p>Que impedem homens de serem respeitados</p>
                        
                        <div class="errors-list">
                            <div class="error-item">
                                <div class="error-number">1</div>
                                <div class="error-text"><strong>Erro #1:</strong> Falta de posicionamento em ambientes de pressão</div>
                            </div>
                            <div class="error-item">
                                <div class="error-number">2</div>
                                <div class="error-text"><strong>Erro #2:</strong> Não saber administrar dinheiro de forma consistente</div>
                            </div>
                            <div class="error-item">
                                <div class="error-number">3</div>
                                <div class="error-text"><strong>Erro #3:</strong> Falta de objetivos claros e propósito de vida</div>
                            </div>
                        </div>
                        
                        <a href="${paymentLink}?preview=true" class="btn-primary-email">
                            🔓 ACESSAR CONTEÚDO COMPLETO
                        </a>
                    </div>
                    
                    <div style="text-align: center; margin-top: 32px;">
                        <p style="color: #8a8a9e; margin-bottom: 20px;">Quer ir além e ter acesso ao método completo?</p>
                        <a href="${paymentLink}" class="btn-secondary-email">
                            🚀 QUERO ACESSAR O MÉTODO COMPLETO
                        </a>
                    </div>
                    
                    <div style="margin-top: 40px; text-align: center;">
                        <p style="color: #5a5a6e; font-size: 12px;">© 2025 APH - Homens com Poder Absoluto. Todos os direitos reservados.</p>
                        <p style="color: #5a5a6e; font-size: 11px; margin-top: 8px;">Você recebeu este e-mail porque solicitou acesso ao conteúdo secreto em nosso site.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    
    const templateParams = {
        to_name: userName,
        to_email: userEmail,
        subject: `🔥 ${userName}, seu presente exclusivo da APH chegou!`,
        message: emailContent,
        html_content: emailContent
    };
    
    try {
        const response = await emailjs.send(
            'service_it71kh1',   // 🔴 SEU SERVICE ID
            'template_39n0t3i',  // 🔴 SEU TEMPLATE ID
            templateParams
        );
        console.log('✅ E-mail enviado com sucesso!', response);
        return true;
    } catch (error) {
        console.error('❌ Erro detalhado:', error);
        alert(`Erro: ${error.text || error.message || 'Falha no envio'}`);
        return false;
    }
}

// ============================================
// ENVIO DO FORMULÁRIO DE AUTOAVALIAÇÃO
// ============================================
const spinForm = document.getElementById('spinForm');

function analyzeMainIssue(situacao, problema, implicacao, necessidade) {
    const text = (situacao + ' ' + problema + ' ' + implicacao + ' ' + necessidade).toLowerCase();
    
    if (text.includes('dinheiro') || text.includes('financeiro') || text.includes('gasto') || text.includes('dívida') || text.includes('salário')) {
        return '📊 Inteligência Financeira';
    } else if (text.includes('pressão') || text.includes('travo') || text.includes('medo') || text.includes('falar') || text.includes('posicionar') || text.includes('respeito')) {
        return '🎯 Posicionamento e Autoridade';
    } else if (text.includes('propósito') || text.includes('objetivo') || text.includes('meta') || text.includes('direção') || text.includes('caminho')) {
        return '🚀 Propósito e Metas';
    } else if (text.includes('mente') || text.includes('mental') || text.includes('pensamento') || text.includes('acreditar')) {
        return '🧠 Mentalidade de Expansão';
    } else {
        return '🎯 Evolução Pessoal';
    }
}

if (spinForm) {
    spinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const situacao = spinForm.querySelector('textarea[name="situacao"]')?.value || '';
        const problema = spinForm.querySelector('textarea[name="problema"]')?.value || '';
        const implicacao = spinForm.querySelector('textarea[name="implicacao"]')?.value || '';
        const necessidade = spinForm.querySelector('textarea[name="necessidade"]')?.value || '';
        
        if (!situacao || !problema || !implicacao || !necessidade) {
            alert('⚠️ Por favor, preencha todas as perguntas da autoavaliação.');
            return;
        }
        
        let userName = situacao.split(' ').slice(0, 3).join(' ');
        if (userName.length < 3) userName = 'Visitante';
        
        const userEmail = prompt('📧 Para receber seu diagnóstico completo, digite seu e-mail:');
        
        if (!userEmail || !userEmail.includes('@')) {
            alert('⚠️ Por favor, insira um e-mail válido.');
            return;
        }
        
        const mainIssue = analyzeMainIssue(situacao, problema, implicacao, necessidade);
        
        const submitBtn = spinForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        const emailSent = await sendWelcomeEmail(userName, userEmail, mainIssue);
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        if (emailSent) {
            openSuccessModal(userName, userEmail, mainIssue);
            spinForm.reset();
        } else {
            alert('❌ Erro ao enviar e-mail. Verifique as credenciais do EmailJS.');
        }
    });
}

// ============================================
// FORMULÁRIO DE CONTEÚDO SECRETO - E-MAIL REAL COM MODAL DE CONFIRMAÇÃO
// ============================================
const leadForm = document.getElementById('leadForm');

if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const nameInput = document.getElementById('leadName');
        const emailInput = document.getElementById('leadEmail');
        
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        
        if (!name) {
            alert('⚠️ Por favor, digite seu nome.');
            nameInput.focus();
            return;
        }
        
        if (!email) {
            alert('⚠️ Por favor, digite seu e-mail.');
            emailInput.focus();
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            alert('⚠️ Digite um e-mail válido (ex: nome@email.com).');
            emailInput.focus();
            return;
        }
        
        const submitBtn = leadForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        const emailSent = await sendWelcomeEmail(name, email, '📘 Conteúdo Secreto: Os 3 Maiores Erros');
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        if (emailSent) {
            // Abre o modal de confirmação personalizado
            openConfirmationModal(name, email);
            
            // Limpa o formulário
            leadForm.reset();
            
            // Atualiza a seção para mostrar mensagem de agradecimento
            const secretWrapper = document.querySelector('.secret-wrapper');
            if (secretWrapper) {
                secretWrapper.innerHTML = `
                    <div style="text-align: center;">
                        <i class="fas fa-check-circle" style="font-size: 4rem; color: #0066CC; margin-bottom: 20px;"></i>
                        <h3 style="color: #0066CC;">📧 E-mail Enviado!</h3>
                        <p>Olá <strong>${name}</strong>, enviamos o conteúdo exclusivo para:</p>
                        <p><strong style="color: #0066CC;">${email}</strong></p>
                        <p>✨ Verifique sua caixa de entrada e a pasta de SPAM ✨</p>
                        <button onclick="location.reload()" style="margin-top: 20px; background: transparent; border: 1px solid #0066CC; color: #0066CC; padding: 10px 24px; border-radius: 60px; cursor: pointer;">
                            Continuar no site
                        </button>
                    </div>
                `;
            }
        } else {
            alert('❌ Erro ao enviar e-mail. Verifique as credenciais do EmailJS.');
        }
    });
}

// ============================================
// COMPROMISSO DE ACCOUNTABILITY
// ============================================
const commitmentBtn = document.getElementById('commitmentBtn');

if (commitmentBtn) {
    commitmentBtn.addEventListener('click', () => {
        const commitment = document.getElementById('commitment')?.value;
        if (commitment && commitment.trim() !== '') {
            alert(`✅ Compromisso registrado!\n\n"${commitment}"`);
            document.getElementById('commitment').value = '';
        } else {
            alert('⚠️ Escreva seu compromisso.');
        }
    });
}

// ============================================
// BOTÃO "NÃO" - TÉCNICA DE COMPROMISSO REVERSO
// ============================================
const finalNo = document.getElementById('finalNo');

if (finalNo) {
    finalNo.addEventListener('click', () => {
        const originalText = finalNo.innerHTML;
        finalNo.innerHTML = '<i class="fas fa-smile"></i><span>Pensando bem... talvez eu devesse dar uma chance</span>';
        finalNo.classList.add('option-yes');
        finalNo.classList.remove('option-no');
        
        setTimeout(() => {
            finalNo.innerHTML = originalText;
            finalNo.classList.remove('option-yes');
            finalNo.classList.add('option-no');
        }, 3000);
        
        setTimeout(() => {
            openModal();
        }, 1000);
    });
}

// ============================================
// FECHAR MODAIS AO CLICAR FORA
// ============================================
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
    if (e.target === successModal) closeSuccessModalFunc();
    if (e.target === confirmationModal) closeConfirmationModalFunc();
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ============================================
// ANIMAÇÕES COM INTERSECTION OBSERVER
// ============================================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll(
    '.result-card, .ident-card, .story-card, .method-item, .bonus-card, ' +
    '.scarcity-card, .human-card, .challenger-content, .challenge, ' +
    '.accountability-card, .spin-card, .secret-wrapper, .quote-card, ' +
    '.pilar-card, .ebook-main-display'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// FLOATING PURCHASE COUNTER (PROVA SOCIAL)
// ============================================
const purchaseCounter = document.createElement('div');
purchaseCounter.className = 'floating-purchase-counter';
purchaseCounter.innerHTML = `<i class="fas fa-user-plus"></i><span>Alguém de <strong id="randomCity">São Paulo</strong> acabou de garantir acesso</span>`;
document.body.appendChild(purchaseCounter);

const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Curitiba', 'Porto Alegre', 'Recife', 'Salvador', 'Fortaleza', 'Manaus'];
const randomCitySpan = document.getElementById('randomCity');

setInterval(() => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    if (randomCitySpan) randomCitySpan.textContent = randomCity;
    purchaseCounter.style.display = 'flex';
    purchaseCounter.style.opacity = '1';
    setTimeout(() => {
        purchaseCounter.style.opacity = '0';
        setTimeout(() => {
            purchaseCounter.style.display = 'none';
        }, 3000);
    }, 4000);
}, 45000);

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadStories();
    loadQuotes();
    updateCounter();
    setTimeout(() => {
        document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});