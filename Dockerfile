# Step 1: Build the React app
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose port React Dev Server runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
