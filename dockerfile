# /project-root/Dockerfile

# Use Node.js LTS version
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json from backend folder
COPY ./backend/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the backend and frontend code
COPY ./backend ./backend
COPY ./frontend ./frontend

# Expose backend port
EXPOSE 5000

# Set a command to run from the correct directory
CMD ["node", "./backend/server.js"]
