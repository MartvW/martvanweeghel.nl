# Stage 1: Build the application
FROM arm64v8/node:16.14 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Build the production-ready app
RUN npm run build

# Stage 2: Serve the built app using 'serve'
FROM arm64v8/node:16.14 AS runner

# Install the static server
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy build artifacts from the builder stage
COPY --from=builder /app/build ./build

# Expose HTTPS port
EXPOSE 443

# Start the app
CMD ["serve", "-s", "build", "-l", "443"]
