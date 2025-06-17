 import { useState, useEffect } from 'react'
 import axios from "axios";
 import { Link } from "react-router-dom";
 import '../style/componentAuto.css'

 const AutoList = () => {
 const [autos, setAuto] = useState([]);

 useEffect(() => {
 getAuto();
 }, []);

 const getAuto = async () => {
 const response = await axios.get('http://localhost:5000/autos'); 
 setAuto(response.data);
 }

 const deleteAuto = async (id) => {
 await axios.delete(`http://localhost:5000/autos/${id}`);
 getAuto();
 }

 return (
 <div>
 <Link to="add" className="button is-primary mt-2">Agregar Auto</Link>
 <table className="table is-striped is-fullwidth">
 <thead>
 <tr>
 <th>Número</th>
 <th>ID</th>
 <th>Marca</th>
 <th>Modelo</th>
 <th>Fabricacion</th>
 <th>Precio</th>

 </tr>
 </thead>
 <tbody>
 { autos.map((auto, index) => (
 <tr key={ auto.id }>
 <td>{ index + 1 }</td>
 <td>{auto.id}</td>
 <td>{ auto.marca }</td>
 <td>{ auto.modelo }</td>
 <td>{ auto.fabricacion }</td>
 <td>{ auto.precio }</td>
 <td>

 <Link to={`edit/${auto.id}`} className="button is-small is-
info">Modificar</Link>

 <button
  onClick={() => {
    const confirmacion = window.confirm('¿Estás seguro que quieres eliminar este auto?');
    if (confirmacion) {
      deleteAuto(auto.id);
    }
  }}
  className="button is-small is-danger">
  Eliminar
</button>

</td>
 </tr>
 )) }
 </tbody>
 </table>
 </div>
 )
 }

export default AutoList