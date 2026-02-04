#!/usr/bin/env bash
set -e

echo "🚀 Starting Docker Compose..."
docker compose up -d --build
docker system prune -f