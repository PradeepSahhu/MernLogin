// require("dotenv").config();
import dotenv from "dotenv";

import { app } from "./app.js";
import DatabaseConnection from "./src/utils/DatabaseConnection.js";

dotenv.config({
  path: "./src/.env",
});

DatabaseConnection()
  .then(() => {
    app.on("error", (error) => {
      console.log("Express can't connect with the mongoDB", error);
    });
    app.listen(8000, () => {
      console.log(process.env.PORT);
      console.log(
        `The server is runnign on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed");
  });
