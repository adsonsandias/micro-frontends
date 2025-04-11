# FROM node:18-alpine AS base

# FROM base AS builder
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# RUN yarn global add turbo
# COPY . .
# RUN turbo prune dashboard --docker

# FROM base AS installer
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/yarn.lock ./yarn.lock
# RUN yarn install --frozen-lockfile
# COPY --from=builder /app/out/full/ .
# RUN yarn turbo run build --filter=dashboard...

# FROM nginx:alpine AS runner
# WORKDIR /app
# COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html
# COPY ./apps/dashboard/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3000

# FROM node:18-alpine AS base

# FROM base AS builder
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# RUN npm install -g turbo
# RUN chown -R nginx:nginx /usr/share/nginx/html
# COPY . .
# RUN turbo prune dashboard --docker

# FROM base AS installer
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app

# # Copia os arquivos de dependências
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json

# # Instala as dependências com npm
# RUN npm ci

# # Copia o resto do código
# COPY --from=builder /app/out/full/ .
# # Adicione isso após COPY --from=builder /app/out/full/ .
# RUN cd apps/dashboard && npm run build && ls -la dist || echo "Erro no build"

# # Build do projeto com npm
# RUN npx turbo run build --filter=dashboard...

# FROM nginx:alpine AS runner
# WORKDIR /app

# # Copia os arquivos construídos
# COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html
# COPY ./apps/dashboard/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3000

# FROM node:18-alpine AS base

# # Estágio builder - Prepara o ambiente e faz o prune
# FROM base AS builder
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# RUN npm install -g turbo
# COPY . .
# RUN turbo prune dashboard --docker

# # Estágio installer - Instala dependências e faz o build
# FROM base AS installer
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app

# # Copia os arquivos de dependências
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json

# # Instala as dependências com npm
# RUN npm ci

# # Copia o resto do código
# COPY --from=builder /app/out/full/ .

# # Build específico para o dashboard com verificação
# RUN cd apps/dashboard && \
#     npm run build && \
#     ls -la dist || (echo "Build failed!" && exit 1)

# # Estágio runner - Configura o Nginx
# FROM nginx:alpine AS runner
# WORKDIR /app

# # Configura permissões e copia os arquivos
# RUN chown -R nginx:nginx /usr/share/nginx/html && \
#     chmod -R 755 /usr/share/nginx/html

# COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html
# COPY ./apps/dashboard/nginx.conf /etc/nginx/conf.d/default.conf

# # Verifica se os arquivos foram copiados corretamente
# RUN ls -la /usr/share/nginx/html

# # Resolução de DNS melhorada
# RUN echo "resolver 127.0.0.11 valid=30s;" > /etc/nginx/resolvers.conf
# RUN apk add --no-cache curl

# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html

# # Verificação de saúde do serviço nextjs
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
#     CMD curl -f http://nextjs:3000/api/health || exit 1

# EXPOSE 3000

# FROM node:18-alpine AS base

# # Estágio builder - Prepara o ambiente e faz o prune
# FROM base AS builder
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# RUN npm install -g turbo
# COPY . .
# RUN turbo prune dashboard --docker

# # Estágio installer - Instala dependências e faz o build
# FROM base AS installer
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app

# # Copia os arquivos de dependências
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json

# # Instala as dependências com npm
# RUN npm ci

# # Copia o resto do código
# COPY --from=builder /app/out/full/ .

# # Build específico para o dashboard
# RUN cd apps/dashboard && \
#     VITE_API_BASE_URL=http://nextjs-app:3000/api npm run build && \
#     ls -la dist || (echo "Build failed!" && exit 1)

# # Estágio runner - Configura o Nginx
# FROM nginx:alpine AS runner
# WORKDIR /app

# # Configurações essenciais
# RUN apk add --no-cache curl && \
#     chown -R nginx:nginx /usr/share/nginx/html && \
#     chmod -R 755 /usr/share/nginx/html && \
#     echo "resolver 127.0.0.11 valid=30s;" > /etc/nginx/resolvers.conf

# # Copia os arquivos construídos
# COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html
# COPY ./apps/dashboard/nginx.conf /etc/nginx/conf.d/default.conf

# # Verificações finais
# RUN ls -la /usr/share/nginx/html && \
#     nginx -t

# # Configuração de DNS para Docker
# RUN echo "resolver 127.0.0.11 valid=30s;" > /etc/nginx/resolvers.conf

# # Substitui variáveis no template
# RUN apk add --no-cache gettext
# COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# # Copia os arquivos construídos
# COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html

# # Variável de ambiente para o nome do serviço
# ENV NEXTJS_SERVICE_NAME=nextjs-app

# EXPOSE 3000


# FROM node:18-alpine AS base

# # Estágio builder
# FROM base AS builder
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app
# RUN npm install -g turbo
# COPY . .
# RUN turbo prune dashboard --docker

# # Estágio installer
# FROM base AS installer
# RUN apk update && apk add --no-cache libc6-compat
# WORKDIR /app

# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json
# RUN npm ci

# COPY --from=builder /app/out/full/ .
# RUN cd apps/dashboard && \
#     VITE_API_BASE_URL=/api npm run build && \
#     ls -la dist || (echo "Build failed!" && exit 1)

# # Estágio runner
# FROM nginx:alpine AS runner
# WORKDIR /app

# # Configurações essenciais
# RUN apk add --no-cache curl && \
#     chown -R nginx:nginx /usr/share/nginx/html && \
#     chmod -R 755 /usr/share/nginx/html && \
#     echo "resolver 127.0.0.11 valid=30s;" > /etc/nginx/resolvers.conf

# # Copia os arquivos necessários
# COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html
# COPY ./apps/dashboard/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 3000

# Dockerfile do apps/dashboard


# // build final
FROM node:18-alpine AS base

# Estágio builder
FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune dashboard --docker

# Estágio installer
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci

COPY --from=builder /app/out/full/ .
RUN cd apps/dashboard && \
    VITE_API_BASE_URL=/api npm run build && \
    ls -la dist || (echo "Build failed!" && exit 1)

# Estágio runner
FROM nginx:alpine AS runner
WORKDIR /app

# Configurações essenciais
RUN apk add --no-cache curl && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    echo "resolver 127.0.0.11 valid=30s;" > /etc/nginx/resolvers.conf

# Copia os arquivos necessários
COPY --from=installer /app/apps/dashboard/dist /usr/share/nginx/html
COPY --from=installer /app/apps/dashboard/dist/assets /usr/share/nginx/html/assets
COPY ./apps/dashboard/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
