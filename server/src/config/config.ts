import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL || !process.env.JWT_SECRET_KEY) {
  throw new Error('❌ Missing required environment variables: DATABASE_URL or JWT_SECRET_KEY');
}

export const config = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
};
