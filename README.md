# 🎫 EventHive - Scalable Event Ticketing Platform

An enterprise-grade, high-performance backend system for managing events, selling tickets, and handling high-concurrency traffic.

## 🚀 Tech Stack & Architecture
* **API Gateway:** Express-Gateway (Rate Limiting, Reverse Proxy)
* **Core Service:** Node.js / Express.js
* **Database:** PostgreSQL (with pg module)
* **Caching:** Redis (Sub-10ms response times)
* **Message Queue:** BullMQ (Asynchronous background tasks)
* **Security:** Helmet, HPP, Custom Data Sanitization, JWT Auth
* **Monitoring:** Prometheus & Grafana (Real-time telemetry)
* **Documentation:** Swagger / OpenAPI
* **Infrastructure:** Docker & Docker Compose

## ⚡ Performance Highlights
* **Load Tested:** Successfully handled 50+ req/sec during simulated traffic spikes.
* **Optimized:** Reduced read latency by 90% using Redis caching strategies.
* **Resilient:** Implemented strict rate-limiting to defend against DDoS attacks.

## 🛠️ How to Run Locally
1. Clone the repository.
2. Ensure Docker Desktop is running.
3. Run `docker-compose up -d --build`
4. Access the API Docs at `http://localhost:5000/api-docs`
5. Access the Grafana Dashboard at `http://localhost:3001` (admin/admin)