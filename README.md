# Agentic AI Backend

An AI-powered backend application built using Node.js, TypeScript, Redis, and OpenRouter APIs.
This project demonstrates modern AI orchestration concepts including intelligent tool selection, response caching, web-search augmentation, modular backend architecture, and cloud deployment.

---

# Features

* AI-powered response generation using OpenRouter LLM APIs
* Agentic AI workflow orchestration
* Intelligent tool selection system
* Web search integration for latest/current information
* Redis-based response caching
* Modular backend architecture
* REST API endpoints
* Cloud deployment using Render
* Upstash Redis cloud integration
* Performance logging and response timing

---

# Tech Stack

* Node.js
* TypeScript
* Express.js
* Redis / Upstash Redis
* OpenRouter APIs
* Render Deployment
* REST APIs

---

# Architecture

Controller Layer
→ Agent Orchestration Layer
→ Tool Decision Layer
→ External Tools / LLM Services / Redis Cache

---

# Project Structure

src/
├── agents/
├── controllers/
├── services/
├── tools/
├── utils/
├── app.ts

---

# Environment Variables

Create a `.env` file:

```env
PORT=3000

OPENROUTER_API_KEY=your_api_key

UPSTASH_REDIS_REST_URL=your_upstash_url

UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

---

# Installation

```bash
git clone <your-repo-url>

cd agentic-ai-backend

npm install
```

---

# Run Locally

```bash
npm run dev
```

---

# API Endpoints

## Health Check

```http
GET /
```

Response:

```json
{
  "success": true,
  "message": "Agentic AI Backend Running"
}
```

---

## Chat Endpoint

```http
POST /chat
```

Request Body:

```json
{
  "prompt": "Explain Redis caching"
}
```

Response:

```json
{
  "success": true,
  "response": "Redis is an in-memory database..."
}
```

---

# Deployment

The project is deployed using:

* Render (Backend Hosting)
* Upstash Redis (Cloud Redis)
* OpenRouter (LLM Provider)

---

# Future Improvements

* Semantic caching using vector embeddings
* Multi-agent workflows
* Memory persistence
* Rate limiting
* Authentication & authorization
* Vector databases
* Streaming responses
* AI observability and tracing

---

# Learning Outcomes

This project helped in understanding:

* Agentic AI architecture
* LLM orchestration
* Backend system design
* Distributed caching
* Cloud deployment
* AI provider abstraction
* Performance optimization
* Scalable modular architecture

---

# Author

Utkarsh Shukla
