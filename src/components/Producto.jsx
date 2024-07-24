import { fomatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const Producto = ({producto, botonAgregar = false, botonDisponible = false}) => {
    const { handleClickModal, handleSetProdcuto,handleClickProductoAgotado } = useQuiosco()
    const { nombre, imagen, precio} = producto
  
    return (
        <div className="border p-3 shadow bg-white">
            <img 
                src={`/img/${imagen}.jpg`} 
                alt={`imagen ${nombre}`} 
                className="w-full"    
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{ fomatearDinero(precio)}</p>

                {botonAgregar && (
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3"
                        onClick={() => {
                            handleClickModal()
                            handleSetProdcuto(producto)
                        }}
                    >Agregar</button>
                )}

                {botonDisponible && (
                    <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3"
                    onClick={() => handleClickProductoAgotado(producto.id)}
                >Producto Agotado</button>
                )}
            </div>
        </div>
  )
}

export default Producto
