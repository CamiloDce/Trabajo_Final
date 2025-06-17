 import { Sequelize } from "sequelize";

 const db = new Sequelize('trabajo_final', 'root', '', {
 host: "localhost",
 dialect: "mysql"
 });

export default db;