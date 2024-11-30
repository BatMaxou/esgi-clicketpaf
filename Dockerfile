FROM node:alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# ----------------------- #
FROM node:alpine

WORKDIR /app

ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]
