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

# Production
FROM nginx:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
