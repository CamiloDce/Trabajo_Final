
 import { useState, useEffect } from 'react'
 import axios from "axios";
 import { useNavigate, useParams } from 'react-router-dom';
 import '../style/editAuto.css'

 const EditAuto = () => {
const [marca, setMarca] = useState('');
const [precio, setPrecio] = useState('');
const [modelo, setModelo] = useState('');
const [fabricacion, setFabricacion] = useState('');
 const history = useNavigate();
 const { id } = useParams();

 const updateAuto = async (e) => {

 e.preventDefault();
 await axios.patch(`http://localhost:5000/autos/${id}`,{
 marca:marca,
 modelo:modelo,
 fabricacion:fabricacion, 
 precio:precio
});
 history("/dashboard/auto");
 }

 useEffect(() => {
 getAutoById();
 }, []);

 const getAutoById = async () => {
 const response = await axios.get(`http://localhost:5000/autos/${id}`);
 setMarca(response.data.marca);
 setModelo(response.data.modelo);
 setFabricacion(response.data.fabricacion);
 setPrecio(response.data.precio);
 }

 return (
 <div>
 <form onSubmit={ updateAuto }>
 <div className="field">
 <label className="label">Marca</label>
 <input
 className="input"
 type="text"
 placeholder="Marca"

 value={ marca }
 onChange={ (e) => setMarca(e.target.value) }
 />
 </div>

 <div className="field">
 <label className="label">Modelo</label>
 <input
 className="input"
 type="text"
 placeholder="Modelo"
 value={ modelo }
 onChange={ (e) => setModelo(e.target.value) }
 />
 </div>
  <div className="field">
 <label className="label">Fabricacion</label>
 <input
 className="input"
 type="text"
 placeholder="Fabricacion"
 value={ fabricacion }
 onChange={ (e) => setFabricacion(e.target.value) }
 />
 </div>
  <div className="field">
 <label className="label">Precio</label>
 <input
 className="input"
 type="text"
 placeholder="Precio"
 value={ precio }
 onChange={ (e) => setPrecio(e.target.value) }
 />
 </div>

 <div className="field">
 <button className="button is-primary">Guardar</button>
 </div>
 </form>
 </div>
 )
 }

export default EditAuto 