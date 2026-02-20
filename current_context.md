# Project: EventHive
# Student: Vikash Verma
# Approach: API First, Manual DB Install
# Status: Day 1 Complete
# Next Up: Connecting Node.js to PostgreSQL and creating the Server.

# Status: Day 3 Complete
# Completed: Enabled UUID extension, Designed Users Table, Implemented Auto-update Triggers.
# Next Up: Creating the Register/Login API in Node.js.

# Status: Day 5 Complete
# Completed: Implemented Login API, bcrypt comparison, and JWT Token generation.
# Next Up: Creating Middleware to protect routes (making sure only logged-in users can access certain data).

# Status: Day 6 Complete
# Completed: Created Auth Middleware, Protected '/me' route.
# Next Up: Phase 3 - Core Logic. Designing the Event Catalog.

# Status: Day 7 Complete
# Completed: Designed Events & Venues Schema, Implemented RBAC (Role Middleware), Created Venue API.
# Next Up: Event Creation API & Linking Events to Venues.

# Status: Day 8 Complete
# Completed: Created Event API (Model, Service, Controller, Route).
# Next Up: Fetching Events (The "Public" View).

# Status: Day 9 Complete
# Completed: Implemented Public Event Catalog, SQL Joins (Events + Venues).
# Next Up: Phase 4 - Commerce. The Booking System & Transactions.

# Status: Day 10 Complete
# Completed: Created Ticket Schema, Bulk Insert Script, Inventory APIs.
# Next Up: The "Booking Transaction" (The Hardest Interview Question).

# Status: Month 2, Week 5 (Day 12)
# Completed: Stress Tested Concurrency, Implemented 'My Bookings' View.
# Next Up: Payment Gateway Integration (Mock).

# Status: Month 2, Week 5 (Day 13)
# Completed: Implemented Pagination, Search, and Filtering.
# Next Up: Payments & External API Integration.

# Status: Month 2, Week 6 (Day 14)
# Completed: Mock Payment Gateway, Booking State Machine (Pending -> Confirmed).
# Next Up: Asynchronous Task Queues (Notifications).

# Status: Month 3, Week 1 (Day 15)
# Completed: Implemented Redis Queue (BullMQ) for background email tasks.
# Next Up: BREAKING THE MONOLITH. Splitting into Microservices.

# Status: Month 3, Week 1 (Day 16)
# Completed: Created 'auth-service' on Port 5001.
# Confirmed: Shared JWT Secret allows services to trust each other.
# Next Up: API Gateway (Nginx) or Service Discovery.

# Status: Month 3, Week 1 (Day 17)
# Completed: Implemented API Gateway (Port 8000) routing to Auth (5001) and Core (5000).
# Study Topics: Reverse Proxies, Rate Limiting, Circuit Breakers.
# Next Up: Docker Compose for Microservices (Running all 3 with one command).

# Status: Month 3, Week 2 (Day 18)
# Completed: Dockerized all services (Auth, Core, Gateway).
# Achievement: Running the full stack with 'docker-compose up'.
# Next Up: CI/CD Pipelines (GitHub Actions).

# Status: Month 3, Week 2 (Day 18)
# Completed: Full System Smoke Test (Auth -> Gateway -> Backend -> DB -> Redis).
# Confirmed: Docker Networking is 100% functional.
# Next Up: Day 19 - CI/CD Pipelines (GitHub Actions).

# Status: Month 3, Week 3 (Day 20)
# Completed: Implemented Redis Caching (Cache-Aside Pattern) for Event listing.
# Next Up: Image Uploads (AWS S3 or Local Multer).

# Status: Month 3, Week 3 (Day 21)
# Completed: Implemented Image Uploads using Multer.
# Configured: Docker Volumes for persistent file storage.
# Next Up: Advanced Error Handling & Logging (Winston).

# Status: Month 3, Week 3 (Day 22)
# Completed: Implemented Winston Logger & Global Error Handler.
# Result: Standardized error responses across the entire backend.
# Next Up: Testing Strategy (Integration Tests with Supertest).

# Status: Month 3, Week 4 (Day 23)
# Completed: Implemented Integration Testing with Supertest & Jest Mocks.
# Refactored: Split app.js and index.js for better testability.
# Next Up: Load Testing (Artillery) or Monitoring (Prometheus).

# Status: Month 3, Week 4 (Day 24)
# Completed: Load Testing with Artillery.
# Verified: Redis reduces response time by ~90% under load.
# Next Up: Security Hardening (Helmet, Rate Limiting, XSS).

# Status: Month 3, Week 4 (Day 25)
# Completed: Security Hardening (Helmet, XSS-Clean, HPP).
# Reverted: Gateway Rate Limit to 100/15min.
# Next Up: Day 26 - Documentation (Swagger/OpenAPI).

# Status: Month 3, Week 4 (Day 26)
# Completed: Implemented Swagger UI for API Documentation.
# URL: http://localhost:5000/api-docs
# Next Up: Day 27 - Monitoring (Prometheus & Grafana).

# Status: Month 3, Week 4 (Day 27)
# Completed: Monitoring & Observability setup.
# Tech: Prometheus (Data Collection) + Grafana (Visualization).
# Next Up: Day 28 - Final Review & Architecture Diagram.

# Status: Month 3, Week 4 (Day 28)
# Completed: Month 3 FINISHED! Architecture review, README update, and portfolio prep.
# Milestone: EventHive Backend is production-ready.
# Next Up: Month 4 - Advanced Features (or whatever is next on the roadmap!).