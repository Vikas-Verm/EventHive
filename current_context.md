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