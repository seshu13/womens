FROM node:20-slim AS base
RUN apt-get update && apt-get install -y openssl

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run generate

# Runner - Using Node.js to serve static files
FROM node:20-slim
WORKDIR /app

# Install serve package globally
RUN npm install -g serve@14.2.1

# Copy only the generated static files
COPY --from=builder /app/.output/public /app/public

EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

# Use serve to host the static files
CMD ["serve", "-s", "/app/public", "-l", "tcp://0.0.0.0:3000"]
