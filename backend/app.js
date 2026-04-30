import "dotenv/config"; // Carrega o .env imediatamente
import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { globalLimiter } from "./src/middlewares/rate-limit.js";
import index_router from "./src/routes/index.js";
import auth_router from "./src/routes/auth-route.js";
import document_router from "./src/routes/document-route.js";
import { errorMiddleware } from "./src/middlewares/error.js";

// Configuração para emular o __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173"
    ]
  })
);

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index_router);
app.use("/auth", auth_router);
app.use("/document", document_router);

app.use(globalLimiter);

app.listen(3000, '0.0.0.0', () => {
  console.log('API RODANDO')
})

app.use(errorMiddleware);

export default app;
