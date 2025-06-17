import { Sequelize } from "sequelize";
 import db from "../config/basedatos.js";

 const { DataTypes } = Sequelize;

 const Auto = db.define('auto',{
 marca:{
 type: DataTypes.STRING
 },
 modelo:{
 type: DataTypes.STRING
 },
 fabricacion:{
 type: DataTypes.INTEGER
 },
 precio:{
    type: DataTypes.DOUBLE
 }

},{
 freezeTableName: true
 });

export default Auto;