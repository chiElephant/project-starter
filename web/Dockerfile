# Frontend Dockerfile
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

# Expose the port the frontend will run on
EXPOSE 3000

# Command to run the frontend
CMD ["pnpm", "dev"]