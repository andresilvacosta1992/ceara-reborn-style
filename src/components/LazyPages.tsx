import { lazy } from 'react';

// Lazy load all page components for better performance
export const LazyIndex = lazy(() => import('@/pages/Index'));
export const LazyHome = lazy(() => import('@/pages/Home'));
export const LazyAbout = lazy(() => import('@/pages/About'));
export const LazyProducts = lazy(() => import('@/pages/Products'));
export const LazyContact = lazy(() => import('@/pages/Contact'));
export const LazyNotFound = lazy(() => import('@/pages/NotFound'));

// Lazy load product pages
export const LazyPerfilados = lazy(() => import('@/pages/products/Perfilados'));
export const LazyEletrocalhas = lazy(() => import('@/pages/products/Eletrocalhas'));
export const LazyLeitosCabos = lazy(() => import('@/pages/products/LeitosCabos'));
export const LazyAcessoriosFixacao = lazy(() => import('@/pages/products/AcessoriosFixacao'));
export const LazyAbracadeiras = lazy(() => import('@/pages/products/Abracadeiras'));
export const LazyEletrodutos = lazy(() => import('@/pages/products/Eletrodutos'));
export const LazyDutosPiso = lazy(() => import('@/pages/products/DutosPiso'));
export const LazyRodapesMetalicos = lazy(() => import('@/pages/products/RodapesMetalicos'));
export const LazyQuadrosComandos = lazy(() => import('@/pages/products/QuadrosComandos'));
export const LazyCaixaTelefonia = lazy(() => import('@/pages/products/CaixaTelefonia'));
export const LazyAbrigosIncendios = lazy(() => import('@/pages/products/AbrigosIncendios'));