# Sistema HTML Simples

Sistema ultra-simples de componentes HTML que gera arquivos estáticos.

## 🚀 Como usar

### 1. Construir o site
```bash
npm run build
```

### 2. Servir localmente
```bash
npm run serve
```

### 3. Construir e servir automaticamente
```bash
npm run dev
```

## 📁 Estrutura

```
componentes_html/          # Componentes HTML reutilizáveis
├── head_meta.html
├── header_logo.html
├── header_menu_paginas.html
└── ...

paginas_html/             # Páginas principais
├── index.html
├── sobre.html
└── produtos.html

static_html/              # Arquivos finais gerados (após build)
├── index.html
├── sobre.html
└── produtos.html
```

## 🔧 Como funciona

1. **Componentes**: Crie arquivos `.html` em `componentes_html/`
2. **Páginas**: Use `{{ nome_componente.html }}` nas páginas em `paginas_html/`
3. **Build**: Execute `npm run build` para gerar os arquivos finais
4. **Deploy**: Use os arquivos da pasta `static_html/`

## 📦 Vantagens

- ✅ Performance máxima
- ✅ Zero dependências
- ✅ SEO otimizado
- ✅ Fácil manutenção
- ✅ Deploy simples

## 🌐 Deploy

Faça upload da pasta `static_html/` para qualquer servidor web.