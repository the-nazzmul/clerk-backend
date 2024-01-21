import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";
import config from "./app/config";

let server: Server;

async function main() {
  try {
    mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      console.log("hello");
    });
  } catch (err) {
    console.log(err);
  }
}


main()