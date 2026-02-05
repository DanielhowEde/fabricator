# Fabricator - Setup & Run Guide

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (with Docker Compose v2)
- An OpenAI API key (for image generation)
- Optionally: Google OAuth credentials (for authentication)

## 1. Environment Setup

Copy the example env file and fill in your keys:

```bash
cp services/web/.env.example services/web/.env.local
```

Then edit `services/web/.env.local`:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>

# Google OAuth (optional - needed for sign-in)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# OpenAI (needed for image generation)
OPENAI_API_KEY=sk-your-key-here
```

> **Never commit `.env.local` to git.** It is already in `.gitignore`.

## 2. Start All Services (Docker)

```bash
# Build and start all 3 services
docker compose up -d --build

# Or use the convenience script
bash scripts/up.sh
```

This starts:

| Service | URL | Description |
|---------|-----|-------------|
| **Web** (Next.js) | http://localhost:5173 | Frontend UI |
| **Node** (Express) | http://localhost:3000 | API gateway / proxy |
| **Python** (FastAPI) | http://localhost:8000 | ML / reconstruction service |

## 3. Verify Services Are Running

```bash
# Check all containers are up
docker compose ps

# Test each service
curl http://localhost:5173        # Web UI
curl http://localhost:3000/health # Node API
curl http://localhost:8000/health # Python API
```

## 4. Stop Services

```bash
docker compose down

# Or use the convenience script
bash scripts/down.sh
```

## 5. Rebuild After Code Changes

Most changes are picked up automatically via hot-reload (volumes are mounted). If you change dependencies or Dockerfiles:

```bash
docker compose up -d --build
```

---

## Using the Application

### Character Model Tool (Image Generation / Upload)

1. Open http://localhost:5173
2. Navigate to the Character Model Tool
3. Choose **Generate image** or **Load image** mode
4. For generation: fill in character description, choose settings, click **Generate**
5. For loading: drag & drop or select images for each view (front, side, back)
6. Save your character with a name

### 3D Reconstruction

1. Upload or generate reference images (front view required, side/back optional)
2. Click the blue **Reconstruct 3D** button in the toolbar
3. Watch the progress bar as it processes
4. When complete, the mesh is available for viewing

### Mesh Workspace

1. Navigate to the Mesh workspace
2. Attach a `.glb` file or use a generated mesh
3. Use the deformation sliders to adjust body proportions
4. Preview the mesh in the 3D viewer

---

## Architecture

```
services/
  web/       Next.js 16 frontend (port 5173)
  node/      Express API gateway (port 3000)
  python/    FastAPI ML service (port 8000)

shared/      Shared volume mounted into node + python
  assets/    Base 3D models (.glb)
  uploads/   Uploaded images (per reconstruction task)
  outputs/   Generated meshes and textures
```

### Data Flow

```
Browser (IndexedDB) <-> Next.js API routes <-> Node proxy <-> Python service
                                                               |
                                                          /shared/ volume
```

---

## API Reference

### Python Service (port 8000)

Full interactive docs at: http://localhost:8000/docs

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/v1/reconstruction/generators` | GET | List available mesh generators |
| `/api/v1/reconstruction/start` | POST | Start reconstruction (multipart: front, side?, back?, mode) |
| `/api/v1/reconstruction/status/{taskId}` | GET | Poll task status and progress |
| `/api/v1/reconstruction/result/{taskId}` | GET | Get result metadata |
| `/api/v1/reconstruction/result/{taskId}/mesh` | GET | Download mesh GLB file |

### Node Service (port 3000)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/python/health` | GET | Python health via proxy |
| `/python/reconstruction/status/:taskId` | GET | Reconstruction status proxy |
| `/python/reconstruction/result/:taskId` | GET | Result metadata proxy |
| `/python/reconstruction/result/:taskId/mesh` | GET | Mesh download proxy |
| `/outputs` | GET | List output files |
| `/outputs/:name` | GET | Download output file |

---

## Troubleshooting

### Docker build fails on Python service

The Python service installs PyTorch and ML dependencies which are large. Make sure Docker has enough memory allocated (recommended: 4GB+).

```bash
# Force rebuild from scratch
docker compose build --no-cache python
```

### Port already in use

```bash
# Check what's using the port
# Windows:
netstat -ano | findstr :5173
# Linux/Mac:
lsof -i :5173
```

### Hot reload not working

Volumes are mounted so file changes should be detected. If not:

```bash
docker compose restart web   # Restart just the web service
docker compose restart node  # Restart just the node service
```

### Python reconstruction fails

Check Python logs:

```bash
docker compose logs python --tail 50
```

### Reset everything

```bash
docker compose down -v   # Remove containers AND volumes
docker compose up -d --build
```
