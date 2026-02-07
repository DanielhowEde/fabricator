#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
CONFIG_FILE="$SCRIPT_DIR/agents.json"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}============================================${NC}"
echo -e "${CYAN}  Fabricator - Claude Flow Agent Startup${NC}"
echo -e "${CYAN}============================================${NC}"
echo ""

# Check dependencies
if ! command -v npx &> /dev/null; then
    echo -e "${RED}Error: npx not found. Install Node.js first.${NC}"
    exit 1
fi

if ! command -v jq &> /dev/null; then
    echo -e "${YELLOW}Warning: jq not found. Install jq for agent config parsing.${NC}"
    echo -e "${YELLOW}  sudo apt install jq${NC}"
    exit 1
fi

if [ ! -f "$CONFIG_FILE" ]; then
    echo -e "${RED}Error: Agent config not found at $CONFIG_FILE${NC}"
    exit 1
fi

# --- Step 1: Start claude-flow daemon ---
echo -e "${GREEN}[1/4] Starting claude-flow daemon...${NC}"
cd "$PROJECT_DIR"
npx @claude-flow/cli@latest daemon start 2>/dev/null || true
echo -e "  Daemon started."

# --- Step 2: Initialize swarm from config ---
TOPOLOGY=$(jq -r '.swarm.topology' "$CONFIG_FILE")
MAX_AGENTS=$(jq -r '.swarm.maxAgents' "$CONFIG_FILE")
STRATEGY=$(jq -r '.swarm.strategy' "$CONFIG_FILE")

echo -e "${GREEN}[2/4] Initializing swarm (topology=$TOPOLOGY, max=$MAX_AGENTS, strategy=$STRATEGY)...${NC}"
npx @claude-flow/cli@latest swarm init \
    --topology "$TOPOLOGY" \
    --max-agents "$MAX_AGENTS" \
    --strategy "$STRATEGY" 2>/dev/null || true
echo -e "  Swarm initialized."

# --- Step 3: Spawn enabled agents ---
echo -e "${GREEN}[3/4] Spawning agents...${NC}"
AGENT_COUNT=$(jq '.agents | length' "$CONFIG_FILE")
SPAWNED=0

for i in $(seq 0 $(( AGENT_COUNT - 1 ))); do
    ENABLED=$(jq -r ".agents[$i].enabled" "$CONFIG_FILE")
    NAME=$(jq -r ".agents[$i].name" "$CONFIG_FILE")
    TYPE=$(jq -r ".agents[$i].type" "$CONFIG_FILE")

    if [ "$ENABLED" = "true" ]; then
        echo -e "  ${CYAN}Spawning: $NAME ($TYPE)${NC}"
        npx @claude-flow/cli@latest agent spawn \
            -t "$TYPE" \
            --name "$NAME" 2>/dev/null || true
        SPAWNED=$((SPAWNED + 1))
    else
        echo -e "  ${YELLOW}Skipped (disabled): $NAME${NC}"
    fi
done

echo -e "  Spawned $SPAWNED agent(s)."

# --- Step 4: Summary ---
echo ""
echo -e "${GREEN}[4/4] Startup complete.${NC}"
echo -e "${CYAN}============================================${NC}"
echo -e "  Swarm:    $TOPOLOGY ($MAX_AGENTS max)"
echo -e "  Agents:   $SPAWNED active"
echo -e "  Config:   $CONFIG_FILE"
echo -e "${CYAN}============================================${NC}"
echo ""
echo -e "Useful commands:"
echo -e "  ${YELLOW}npx @claude-flow/cli@latest agent list${NC}       - List running agents"
echo -e "  ${YELLOW}npx @claude-flow/cli@latest swarm status${NC}     - Swarm status"
echo -e "  ${YELLOW}npx @claude-flow/cli@latest memory list${NC}      - Shared memory"
echo -e "  ${YELLOW}npx @claude-flow/cli@latest daemon stop${NC}      - Stop everything"
