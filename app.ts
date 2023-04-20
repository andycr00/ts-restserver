import dotenv from "dotenv";
import Server from "./models/server";

// Conf DotEnv
dotenv.config();

const server = new Server();

server.listen();