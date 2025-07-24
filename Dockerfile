FROM oven/bun:1.1.13-alpine as base
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .

FROM oven/bun:1.1.13-alpine as prod
WORKDIR /app
COPY --from=base /app .
EXPOSE 3000
CMD ["bun", "dev"]
