#!/bin/bash

echo "🚀 Construindo site estático..."
node build.js

echo ""
echo "📁 Arquivos gerados em static_html/"
echo ""
echo "Para servir localmente:"
echo "  cd static_html && python -m http.server 8000"
echo ""
echo "Ou use qualquer servidor web apontando para static_html/"