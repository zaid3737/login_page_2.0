# Use Node.js LTS version
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy rest of the backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["npm", "start"]
