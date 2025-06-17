import { useEffect, useState } from "react";
import axios from "axios";
import "../style/carrito.css";

export const FakeStore = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [mensaje, setMensaje] = useState("");
    const [carrito, setCarrito] = useState([]);

useEffect(() => {
    const obtenerProductos = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/category/electronics");
            
            const data = await res.json();
            setProductos(data);
        } catch (error) {
            console.error("Fallo el fetch:", error);
        } finally {
            setIsLoading(false);
        }
    };

    obtenerProductos();
}, []);

    const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
        const existe = prev.find(p => p.id === producto.id);
        if (existe) {
            return prev.map(p =>
                p.id === producto.id ? { ...p, quantity: p.quantity + 1 } : p
            );
        }
        return [...prev, { ...producto, quantity: 1 }];
    });
};

const CrearCarrito = async () => {
    if (carrito.length === 0) {
        setMensaje("No hay productos seleccionados.");
        return;
    }

    const productosFormateados = carrito.map(p => ({
        productId: p.id,
        quantity: p.quantity
    }));

    try {
        const response = await axios.post("https://fakestoreapi.com/carts", {
            userId: 1,
            products: productosFormateados
        });
        console.log(response)
        setMensaje("✅ Carrito creado con éxito (ID: " + response.data.id + ")");
        setCarrito([]);
    } catch (error) {
        setMensaje("❌ Error al crear carrito");
        console.error(error);
   }
};
    return (
 <div className="container1">
            <h2 className="title is-4">Carrito</h2>

            {isLoading ? (
                <p style={{ color: 'white' }}>Cargando productos...</p>
            ) : (
                <>
                    <div className="columns is-multiline">
                        {productos.map(p => (
                            <div className="column is-one-third" key={p.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={p.image} alt={p.title} />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <p className="title is-5">{p.title}</p>
                                        <p className="subtitle is-6">${p.price}</p>
                                        <p><strong>Categoría:</strong> {p.category}</p>
                                        <p><strong>Descripción:</strong> {p.description}</p>
                                        <p><strong>Rating:</strong> ⭐ {p.rating.rate} ({p.rating.count} valoraciones)</p>
                                        <button className="button is-small is-info mt-3" onClick={() => agregarAlCarrito(p)}>
                                           Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="my-4">
                        {carrito.length > 0 && (
                          <div className="box mt-5">
                            <h4 className="title is-6">🛒 Productos seleccionados:</h4>
                            <ul>
                              {carrito.map(p => (
                                <li key={p.id}>
                                  {p.title} — ${p.price} x {p.quantity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <button className="button is-primary2" onClick={CrearCarrito}>
                            Crear Carrito
                        </button>
                        {mensaje && <p className="mt-2 has-text-weight-semibold">{mensaje}</p>}
                    </div>
                </>
            )}
        </div>
    );
};