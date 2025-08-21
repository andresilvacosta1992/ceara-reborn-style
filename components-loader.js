// Sistema simples de carregamento de componentes HTML
document.addEventListener('DOMContentLoaded', async function() {
    
    // Função para carregar um componente
    async function loadComponent(componentName) {
        try {
            const response = await fetch(`componentes_html/${componentName}`);
            if (!response.ok) {
                console.warn(`Componente ${componentName} não encontrado`);
                return '';
            }
            return await response.text();
        } catch (error) {
            console.warn(`Erro ao carregar ${componentName}:`, error);
            return '';
        }
    }

    // Função para processar todos os templates na página
    async function processTemplates() {
        const body = document.body;
        let html = body.outerHTML;
        
        // Encontrar todas as referências {{ component.html }}
        const templateRegex = /\{\{\s*([^}]+\.html)\s*\}\}/g;
        const matches = [...html.matchAll(templateRegex)];
        
        // Carregar todos os componentes
        const componentPromises = matches.map(match => {
            const componentName = match[1].trim();
            return loadComponent(componentName);
        });
        
        const componentContents = await Promise.all(componentPromises);
        
        // Substituir os templates pelos conteúdos
        matches.forEach((match, index) => {
            const fullMatch = match[0];
            const content = componentContents[index];
            html = html.replace(fullMatch, content);
        });
        
        // Atualizar o DOM
        document.documentElement.innerHTML = html;
        
        // Reprocessar se ainda houver templates (para componentes aninhados)
        if (templateRegex.test(html)) {
            setTimeout(() => processTemplates(), 100);
        }
    }

    // Iniciar o processamento
    await processTemplates();
    
    // Adicionar funcionalidades após carregamento
    addInteractivity();
});

// Adicionar interatividade básica
function addInteractivity() {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Destacar menu ativo
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#2563eb';
            link.style.borderBottomColor = '#2563eb';
        }
    });
}

// Performance: Lazy loading para imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observar imagens com data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}