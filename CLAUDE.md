# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**dossier_latam** is an interactive digital dossier project designed to be provided to potential clients. The project showcases information in an engaging and modern interface.

## Project Language

This project is primarily in Spanish (LATAM). Commit messages, documentation, and code comments should be in Spanish unless otherwise specified.

## Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React 0.563.0
- **Deployment**: Vercel

## Development Commands

```bash
# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

## MCP Configuration

This project uses the Vercel MCP server for enhanced integration with Vercel services. The configuration is stored in `.mcp.json`.

### Available MCP Tools

The Vercel MCP provides access to:
- Search and navigate Vercel documentation
- Manage projects and deployments
- Analyze deployment logs

### Authentication

To use the MCP tools, authenticate by running `/mcp` in Claude Code and following the OAuth flow.

### Project-Specific Access

For better performance, you can use project-specific MCP URLs:
```
https://mcp.vercel.com/<teamSlug>/<projectSlug>
```

## Architecture

### Project Structure

```
dossier_latam/
├── app/                      # Next.js App Router
│   ├── components/          # Componentes de React
│   │   └── LatamDigitalDossier.tsx  # Componente principal del dossier
│   ├── globals.css          # Estilos globales con Tailwind
│   ├── layout.tsx           # Layout raíz de la aplicación
│   └── page.tsx             # Página principal
├── public/                  # Archivos estáticos
├── next.config.ts           # Configuración de Next.js
├── tailwind.config.ts       # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
├── vercel.json              # Configuración de Vercel
└── package.json             # Dependencias y scripts
```

### Key Features

- **App Router**: Utiliza el nuevo sistema de enrutamiento de Next.js 16
- **TypeScript**: Configuración estricta con tipos seguros
- **Tailwind CSS**: Sistema de diseño utility-first
- **Component-based**: Arquitectura modular con componentes reutilizables
- **Optimized for Vercel**: Configuración lista para despliegue en Vercel

### Deployment

El proyecto está configurado para desplegarse automáticamente en Vercel:
- Build command: `npm run build`
- Dev command: `npm run dev`
- Install command: `npm install`
- Framework: Next.js
