import express from "express";
import morgan from "morgan";
import config from "./config";

//Routes
import librosRoutes from "./routes/libros.routes";

//create express app
const app = express();

//settings
app.set("port", config.port || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/libros", librosRoutes);

//export
export default app;