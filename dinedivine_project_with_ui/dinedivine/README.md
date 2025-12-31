# DINEDIVINE — Free-to-Play Fantasy Cricket (Next.js)

This project is generated from your API-implementation PDF flow:
- Cricket API wrapper (`src/lib/cricketApi.ts`)
- Next.js API routes (`/api/cricscore`, `/api/matches/[id]/squad`, `/api/teams`)
- DB + Drizzle schema (`src/lib/db/schema.ts`)
- Auth (NextAuth credentials) + Register API

## 1) Install
```bash
npm install
```

## 2) Environment variables
Create `.env.local`:

```bash
# Required for DB + Auth features
DATABASE_URL="mysql://user:pass@host:3306/dbname"
NEXTAUTH_SECRET="a-long-random-secret"
NEXTAUTH_URL="http://localhost:3000"

# Optional (if not set, the app runs with mock match + squad data)
CRICKET_API_BASE_URL="https://YOUR_PROVIDER_BASE_URL"
CRICKET_API_KEY="YOUR_API_KEY"
```

## 3) Initialize DB tables (optional helper)
After setting `DATABASE_URL`, open:
- `http://localhost:3000/api/db-init`

## 4) Run
```bash
npm run dev
```

Open: http://localhost:3000

## Notes
- If you don't set `CRICKET_API_*`, the app uses mock data (so preview always works).
- If you don't set `DATABASE_URL`, Register/Login/Save Team will return a friendly error.
