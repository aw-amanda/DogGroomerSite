import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { contactSubmissions } from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
export { contactSubmissions };