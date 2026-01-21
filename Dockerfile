FROM oven/bun:1

WORKDIR /app

# Copy dependency files first for better caching
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy the rest of the code
COPY . .

# If you use a PORT env var on the platform, your app must listen on it
# EXPOSE is optional but nice
EXPOSE 3000

# Start your app (must match your package.json "start")
CMD ["bun", "run", "start"]
