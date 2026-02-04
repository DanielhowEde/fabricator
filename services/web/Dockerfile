# syntax=docker/dockerfile:1
FROM node:20-alpine AS deps
WORKDIR /app

# Only copy lockfiles first (max cache hit)
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS runner
WORKDIR /app

# Copy node_modules from deps layer
COPY --from=deps /app/node_modules ./node_modules

# Now copy the rest of your app
COPY . .

ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm","run","dev"]