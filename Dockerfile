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
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["node", ".output/server/index.mjs"]
