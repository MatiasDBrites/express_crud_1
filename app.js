// Import express
import express from "express"; 
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import router from "./routes/routes";
// Init express
const app = express(); 
// use express json
app.use(express.json());

// var corsOptions = {
//   origin: 'http://example.com',
// }

app.use(cors());

//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router

app.use(router);

app.listen(3001, () => {
  console.log('Server running on localhost:3001...')
})