# Build Stage
FROM node:18 AS build

WORKDIR /app

# Copy lock files and package.json first
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Build-time environment variables
ARG REACT_APP_SUPABASE_URL
ARG REACT_APP_SUPABASE_ANON_KEY
ENV REACT_APP_SUPABASE_URL=$REACT_APP_SUPABASE_URL
ENV REACT_APP_SUPABASE_ANON_KEY=$REACT_APP_SUPABASE_ANON_KEY

# Build React app
RUN npm run build

# Production Stage
FROM node:18-slim

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built React app from build stage
COPY --from=build /app/build ./build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
