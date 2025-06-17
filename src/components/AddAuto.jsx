import { useState } from 'react'
 import axios from "axios";
 import { useNavigate } from 'react-router-dom';
 import '../style/editAuto.css'

const AddAuto = () => {
const [marca, setMarca] = useState('');
const [precio, setPrecio] = useState('');
const [modelo, setModelo] = useState('');
const [fabricacion, setFabricacion] = useState('');
const history = useNavigate();

 const saveAuto = async (e) => {
 e.preventDefault();
 await axios.post('http://localhost:5000/autos',{
 marca:marca,
 modelo:modelo,
 fabricacion:fabricacion, 
 precio:precio
 });

 history("/dashboard/auto");
 }

 return (
 <div>
 <form onSubmit={ saveAuto}>
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

export default AddAuto