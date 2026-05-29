# Medusa Store

Medusa v2 ecommerce platform with storefront and admin panel.

## Structure

- `backend/` - Medusa server
- `storefront/` - Next.js storefront
- `docker-compose.yml` - Local dev environment

## Local Dev

```bash
docker-compose up -d
```

## CI/CD

CircleCI builds and pushes Docker images on `main` branch, then triggers Dokploy deployment.

### Required CircleCI env vars:
- `GHCR_TOKEN` (GitHub PAT with `write:packages`)
- `DOKPLOY_WEBHOOK_URL`
