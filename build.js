const fs = require('fs');
const path = require('path');

// Diretórios
const COMPONENTS_DIR = './componentes_html';
const PAGES_DIR = './paginas_html';
const OUTPUT_DIR = './static_html';

// Função para ler todos os componentes
function loadComponents() {
    const components = {};
    
    if (!fs.existsSync(COMPONENTS_DIR)) {
        console.log('Pasta componentes_html não encontrada');
        return components;
    }
    
    const files = fs.readdirSync(COMPONENTS_DIR);
    
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const componentName = file;
            const componentPath = path.join(COMPONENTS_DIR, file);
            components[componentName] = fs.readFileSync(componentPath, 'utf8');
        }
    });
    
    return components;
}

// Função para processar uma página e injetar componentes
function processPage(pageContent, components) {
    let processedContent = pageContent;
    
    // Substituir todas as ocorrências de {{ component.html }}
    const templateRegex = /\{\{\s*([^}]+\.html)\s*\}\}/g;
    
    processedContent = processedContent.replace(templateRegex, (match, componentName) => {
        const trimmedName = componentName.trim();
        
        if (components[trimmedName]) {
            return components[trimmedName];
        } else {
            console.warn(`Componente não encontrado: ${trimmedName}`);
            return `<!-- Componente ${trimmedName} não encontrado -->`;
        }
    });
    
    return processedContent;
}

// Função principal para construir o site
function buildSite() {
    console.log('🚀 Iniciando build do site...');
    
    // Carregar componentes
    const components = loadComponents();
    console.log(`📦 Carregados ${Object.keys(components).length} componentes`);
    
    // Criar diretório de saída
    if (fs.existsSync(OUTPUT_DIR)) {
        fs.rmSync(OUTPUT_DIR, { recursive: true });
    }
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    
    // Processar páginas
    if (!fs.existsSync(PAGES_DIR)) {
        console.error('❌ Pasta paginas_html não encontrada');
        return;
    }
    
    const pages = fs.readdirSync(PAGES_DIR);
    
    pages.forEach(page => {
        if (page.endsWith('.html')) {
            console.log(`🔧 Processando ${page}...`);
            
            const pagePath = path.join(PAGES_DIR, page);
            const pageContent = fs.readFileSync(pagePath, 'utf8');
            
            // Processar página múltiplas vezes para componentes aninhados
            let processedContent = pageContent;
            let iterations = 0;
            const maxIterations = 5;
            
            while (iterations < maxIterations) {
                const beforeProcessing = processedContent;
                processedContent = processPage(processedContent, components);
                
                // Se não houve mudanças, parar o processamento
                if (beforeProcessing === processedContent) {
                    break;
                }
                
                iterations++;
            }
            
            // Salvar página processada
            const outputPath = path.join(OUTPUT_DIR, page);
            fs.writeFileSync(outputPath, processedContent, 'utf8');
            
            console.log(`✅ ${page} → static_html/${page}`);
        }
    });
    
    console.log('🎉 Build concluído! Arquivos estáticos gerados em static_html/');
}

// Executar build
buildSite();