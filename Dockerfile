# Use official Node.js image for build
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json* yarn.lock* ./
RUN npm install

COPY . .

RUN npm run build

# Use a lightweight web server to serve the build
FROM node:18-slim

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]