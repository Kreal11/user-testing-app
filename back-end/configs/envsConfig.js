import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, PORT, JWT_SECRET, EMAIL, BASE_URL } = process.env;

export const envsConfig = {
  port: PORT,
  dbHost: DB_HOST,
  email: EMAIL,
  baseUrl: BASE_URL,
};
