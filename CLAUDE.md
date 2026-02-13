# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**dossier_latam** is an interactive dossier project designed to be provided to potential clients. The project is currently in its initial setup phase.

## Project Language

This project is primarily in Spanish (LATAM). Commit messages, documentation, and code comments should be in Spanish unless otherwise specified.

## Development Commands

> **Note**: This project is in early stages. Development commands will be added as the tech stack and build system are established.

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

> **Note**: Architecture details will be documented as the project structure is developed.
