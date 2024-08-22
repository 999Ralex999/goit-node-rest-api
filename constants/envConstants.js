import dotenv from "dotenv";

dotenv.config();

const envConstants = process.env;

export const PORT = envConstants.PORT || 3000;
export const DATABASE_NAME = envConstants.DATABASE_NAME;
export const DATABASE_USER = envConstants.DATABASE_USER;
export const DATABASE_PASSWORD = envConstants.DATABASE_PASSWORD;
export const DATABASE_HOST = envConstants.DATABASE_HOST;
export const DATABASE_PORT = envConstants.DATABASE_PORT;
export const DATABASE_DIALECT = envConstants.DATABASE_DIALECT;
export const JWT_SECRET = envConstants.JWT_SECRET;
