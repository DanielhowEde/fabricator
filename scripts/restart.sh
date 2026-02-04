#!/usr/bin/env bash
set -e

echo "🔁 Restarting stack..."
docker compose down
docker compose up -d --build
