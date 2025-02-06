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
RUN npm run build

# Runner - Using Node.js to serve static files
FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production

# Install serve package globally
RUN npm install -g serve

# Copy only the built static files
COPY --from=builder /app/.output/public ./public

EXPOSE 3000

# Serve static files using serve
CMD ["serve", "-s", "public", "-l", "3000"]
