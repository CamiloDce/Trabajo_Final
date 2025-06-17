 import express from "express";
 import db from "./config/basedatos.js";
 import autoRoutes from "./routes/router.js";
 import cors from "cors";

 const app = express();
 const startServer = async () => {  
 try {
 await db.authenticate();
 console.log('Database connected...');
 } catch (error) {
 console.error('Connection error:', error);
 }

 app.use(cors());
 app.use(express.json());
 app.use('/autos', autoRoutes);
 app.listen(5000, () => console.log('Server running at port 5000'));
}; 
startServer();



