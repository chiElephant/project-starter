# Backend Dockerfile
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Enable Corepack
RUN corepack enable

# Activate pnpm
RUN corepack prepare pnpm@latest --activate

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port the backend will run on
EXPOSE 8000

# Command to run the backend
CMD ["pnpm", "dev"]