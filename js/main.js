// ========================================
// Array de Projetos
// ========================================
const projetos = [
    {
        id: 1,
        titulo: "Projeto Web Responsivo",
        descricao: "Desenvolvimento de aplicação web moderna e responsiva, com foco em experiência do usuário e performance.",
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/joseabdiasdecarvalho-cmyk",
        demoLink: null,
        icone: "🌐"
    },
    {
        id: 2,
        titulo: "Sistema de Gerenciamento",
        descricao: "Plataforma completa para gerenciamento com dashboard interativo e relatórios em tempo real.",
        tecnologias: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/joseabdiasdecarvalho-cmyk",
        demoLink: null,
        icone: "📊"
    },
    {
        id: 3,
        titulo: "E-commerce Moderno",
        descricao: "Loja virtual completa com carrinho de compras, sistema de pagamento e painel administrativo.",
        tecnologias: ["JavaScript", "CSS3", "API"],
        githubLink: "https://github.com/joseabdiasdecarvalho-cmyk",
        demoLink: null,
        icone: "🛒"
    },
    {
        id: 4,
        titulo: "Landing Page Corporativa",
        descricao: "Landing page profissional com animações suaves, otimizada para conversão e SEO.",
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/joseabdiasdecarvalho-cmyk",
        demoLink: null,
        icone: "🚀"
    },
    {
        id: 5,
        titulo: "API RESTful",
        descricao: "API robusta e escalável com autenticação, documentação completa e testes automatizados.",
        tecnologias: ["Node.js", "Express", "PostgreSQL"],
        githubLink: "https://github.com/joseabdiasdecarvalho-cmyk",
        demoLink: null,
        icone: "🔌"
    },
    {
        id: 6,
        titulo: "Dashboard Analytics",
        descricao: "Painel de controle com visualização de dados, gráficos interativos e filtros personalizados.",
        tecnologias: ["React", "Chart.js", "API"],
        githubLink: "https://github.com/joseabdiasdecarvalho-cmyk",
        demoLink: null,
        icone: "📈"
    }
];

// ========================================
// Função para Renderizar Projetos
// ========================================
function renderizarProjetos() {
    const container = document.getElementById('projetosContainer');
    
    if (!container) {
        console.error('Container de projetos não encontrado!');
        return;
    }
    
    // Limpa o container antes de renderizar
    container.innerHTML = '';
    
    // Renderiza cada projeto
    projetos.forEach(projeto => {
        const projetoCard = criarCardProjeto(projeto);
        container.appendChild(projetoCard);
    });
}

// ========================================
// Função para Criar Card de Projeto
// ========================================
function criarCardProjeto(projeto) {
    // Cria o elemento principal do card
    const card = document.createElement('div');
    card.className = 'projeto-card';
    card.setAttribute('data-id', projeto.id);
    
    // HTML do card
    card.innerHTML = `
        <div class="projeto-header">
            <span class="projeto-icone">${projeto.icone}</span>
        </div>
        <div class="projeto-conteudo">
            <h3 class="projeto-titulo">${projeto.titulo}</h3>
            <p class="projeto-descricao">${projeto.descricao}</p>
            <div class="projeto-tecnologias">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="projeto-links">
                ${projeto.githubLink ? `
                    <a href="${projeto.githubLink}" target="_blank" rel="noopener" class="projeto-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                ` : ''}
                ${projeto.demoLink ? `
                    <a href="${projeto.demoLink}" target="_blank" rel="noopener" class="projeto-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// ========================================
// Menu Mobile Toggle
// ========================================
function inicializarMenuMobile() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Fecha o menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ========================================
// Smooth Scroll para Links de Âncora
// ========================================
function inicializarSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Ignora links vazios ou apenas "#"
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Altura do header fixo
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Formulário de Contato
// ========================================
function inicializarFormularioContato() {
    const form = document.getElementById('contatoForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Pega os valores dos campos
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Aqui você pode implementar o envio do formulário
            // Por enquanto, apenas exibe uma mensagem
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            
            // Limpa o formulário
            form.reset();
        });
    }
}

// ========================================
// Header Fixo com Scroll
// ========================================
function inicializarHeaderFixo() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// ========================================
// Inicialização quando o DOM estiver pronto
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();
    inicializarMenuMobile();
    inicializarSmoothScroll();
    inicializarFormularioContato();
    inicializarHeaderFixo();
    
    console.log('Portfólio carregado com sucesso!');
});
