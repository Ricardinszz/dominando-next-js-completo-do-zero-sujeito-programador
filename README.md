# Guia Next JS completo

Um repositório com anotações e exemplos para aprender os conceitos essenciais do Next.js (app router). Ideal para estudos e consultas rápidas.

---

## Sumário
- [O que tem aqui](#o-que-tem-aqui)
- [Como rodar localmente](#como-rodar-localmente)
- [Tópicos do guia](#tópicos-do-guia)
  - [Criação de projetos](#criação-de-projetos)
  - [Estrutura de pastas do Next.js](#estrutura-de-pastas-do-nextjs)
  - [Roteamento e navegação de páginas](#roteamento-e-navegação-de-páginas)
  - [Not Found](#not-found)
  - [Metadata (SEO)](#metadata-seo)
  - [Server x Client components](#server-x-client-components)
  - [Rotas Dinâmicas](#rotas-dinâmicas)
  - [Actions (server actions)](#actions-server-actions)
  - [Loading e Streaming](#loading-e-streaming)
  - [Revalidate / Cache (ISR)](#revalidate--cache-isr)
  - [Cache Fetch — exemplo](#cache-fetch---exemplo)
  - [Middleware](#middleware)
  - [Route Handlers (API no app)](#route-handlers-api-no-app)
- [Contribuições](#contribuições)
- [Licença](#licença)

---

## O que tem aqui
Este repositório reúne exemplos mínimos e explicações rápidas sobre funcionalidades do Next.js (app directory): criação do projeto, roteamento, componentes server/client, cache, middleware, handlers de rota, e mais.

---

## Como rodar localmente
Pré-requisitos: Node.js (versão LTS), npm ou yarn.

```bash
# clonar 
git clone https://github.com/Ricardinszz/dominando-next-js-completo-do-zero-sujeito-programador?tab=readme-ov-file#o-que-tem-aqui
cd NOME_REPO

# instalar dependências
npm install

# rodar em modo dev
npm run dev
# acessar http://localhost:3000
