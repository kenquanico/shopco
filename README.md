# SHOP.CO

Vue storefront with a Laravel, PostgreSQL, and Sanctum cookie-authentication backend.

## Local setup

Create the PostgreSQL database:

```sql
CREATE DATABASE shopco;
```

Start the backend:

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

Set the database credentials and SMTP mail settings in `backend/.env`. Password-reset emails require a working mail provider. For local mail inspection, set `MAIL_MAILER=log` and inspect `backend/storage/logs/laravel.log`.

In another terminal, start the frontend:

```bash
cp .env.example .env
npm install
npm run dev
```

The defaults expect the frontend at `http://localhost:5173` and Laravel at `http://localhost:8000`. Keep `FRONTEND_URL`, `SANCTUM_STATEFUL_DOMAINS`, `SESSION_DOMAIN`, and `VITE_API_URL` aligned if those addresses change.

## Verification

```bash
npm run build
cd backend
php artisan test
./vendor/bin/pint --test
```
