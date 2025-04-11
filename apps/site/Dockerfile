# FROM node:18-alpine AS base

# FROM base AS builder
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# RUN yarn global add turbo
# COPY . .
# RUN turbo prune site --docker

# FROM base AS installer
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/yarn.lock ./yarn.lock
# RUN yarn install --frozen-lockfile
# COPY --from=builder /app/out/full/ .
# RUN yarn turbo run build --filter=site...

# FROM base AS runner
# WORKDIR /app
# RUN addgroup --system --gid 1001 nodejs && \
#     adduser --system --uid 1001 nextjs
# USER nextjs
# COPY --from=installer --chown=nextjs:nodejs /app/apps/site/.next/standalone ./
# COPY --from=installer --chown=nextjs:nodejs /app/apps/site/.next/static ./apps/site/.next/static
# COPY --from=installer --chown=nextjs:nodejs /app/apps/site/public ./apps/site/public
# CMD node apps/site/server.js

FROM node:18-alpine AS base

FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune site --docker

FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci
COPY --from=builder /app/out/full/ .
RUN npx turbo run build --filter=site...

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer --chown=nextjs:nodejs /app/apps/site/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/site/.next/static ./apps/site/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/site/public ./apps/site/public
CMD node apps/site/server.js