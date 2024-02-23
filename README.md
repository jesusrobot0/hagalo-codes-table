# hagalo-codes-table

## How to Run

Follow these steps to run the project in your local environment:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jesusrobot0/hagalo-codes-table.git
   ```

2. **Install Dependencies:**

   ```bash
   cd hagalo-codes-table
   pnpm install
   ```

3. Configure the .env.template file

   - First, copy the file to one with the name `.env`
   - and then update the database connection string with the valid credentials.

4. **Docker Database Lift**

   ```bash
   docker compose up -d
   ```

5. Migrate db and generate the prisma client

   ```bash
   pnpm dlx prisma migrate dev
   pnpm dlx prisma generate
   ```

6. **Start the Application:**

   ```bash
   pnpm run dev
   ```
