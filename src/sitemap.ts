// Static sitemap generation for SEO optimization
export const generateSitemap = () => {
  const baseUrl = 'https://cearaperfil.com.br';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/produtos', priority: '0.9', changefreq: 'weekly' },
    { url: '/sobre', priority: '0.8', changefreq: 'monthly' },
    { url: '/contato', priority: '0.8', changefreq: 'monthly' },
    { url: '/produtos/eletrocalhas', priority: '0.9', changefreq: 'weekly' },
    { url: '/produtos/perfilados', priority: '0.9', changefreq: 'weekly' },
    { url: '/produtos/leitos-cabos', priority: '0.9', changefreq: 'weekly' },
    { url: '/produtos/eletrodutos', priority: '0.9', changefreq: 'weekly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};

// Generate sitemap.xml during build
if (typeof window === 'undefined') {
  const fs = require('fs');
  const path = require('path');
  
  const sitemapContent = generateSitemap();
  const publicDir = path.join(process.cwd(), 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
}