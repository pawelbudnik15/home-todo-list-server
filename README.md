# Step 1. Install dependencies
```bash
npm install
```

# Step 2. Set up environment variables
```bash
cp .env.example .env
```
Set the `DATABASE_URL` environment variable to the URL of your database.
Example:
```
DATABASE_URL=mysql://[DB_USER_NAME]:[DB_PASSWORD]@localhost:3306/[DB_NAME]
```

# Step 3. Run the development server
```bash
npm run dev
```