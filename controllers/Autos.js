import Auto from "../models/modelsAuto.js";

 export const getAllProducts = async (req, res) => {
 try {
 const autos = await Auto.findAll();
 res.json(autos);
 } catch (error) {
 res.json({ message: error.message });
 }
 }

 export const getProductById = async (req, res) => {
 try {
 const auto = await Auto.findAll({

 where: {
 id: req.params.id
 }
 });
 res.json(auto[0]);
 } catch (error) {
 res.json({ message: error.message });
 }
 }

 export const createProduct = async (req, res) => {
 try {
 await Auto.create(req.body);
 res.json({
 "message": "Auto Created"
 });
 } catch (error) {
 res.json({ message: error.message });
 }
 }

 export const updateProduct = async (req, res) => {
 try {
 await Auto.update(req.body, {
 where: {
 id: req.params.id
 }

 });
 res.json({
 "message": "Auto Updated"
 });
 } catch (error) {
 res.json({ message: error.message });
 }
 }

 export const deleteProduct = async (req, res) => {
 try {
 await Auto.destroy({
 where: {
 id: req.params.id
 }
 });
 res.json({
 "message": "Auto Deleted"
 });
 } catch (error) {
 res.json({ message: error.message });
 }
}