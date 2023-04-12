import { connect } from "mongoose";
import { config } from "dotenv";

config();

const MONGO_URI = process.env.MONGO_URI;
// console.log(MONGO_URI);
(async () => {
  const db = await connect(MONGO_URI).catch((err) => console.error(err));
  console.log(`DB ${db.connection.name} is connected`);
})();
