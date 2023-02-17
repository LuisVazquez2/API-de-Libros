import { config } from "dotenv";

config();

export default {
    port: process.env.PORT,
    db: {
        host: process.env.DB_HOST || "",
        user: process.env.DB_USER || "",
        port: process.env.DB_PORT || "",
        name: process.env.DB_NAME || "",
        password: process.env.DB_PASSWORD || "",
    }
};
