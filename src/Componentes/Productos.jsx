

import products from "../data"
import "../css/productos.css"
import Swal from "sweetalert2"

const Productos = () => {
    const handleComprar = () => {
            //alert ("Gracias por comprar nuestro producto")
            Swal.fire('Gracias por comprar nuestro producto')
    }
    return (
        <div className="container">
            
                <h1 className="m-4 text-center">Productos para la venta</h1>
                {products.map((products) => {
                    // console.log(products)
                    console.log(products.id)
                    console.log(products.name)
                    console.log(products.image)
                    console.log(products.precio);
                
                    return (
                        <>
                            <div className="card miEstilo">
                                <img src={products.image} className="card-img-top" alt="productos" />
                                <div Name="card-body">
                                    <h5 className="card-title">{products.name}</h5>
                                    <p className="card-text">${products.precio}</p>
                                    <div className="text-center">
                                        <button onClick={ handleComprar }  className="btn btn-primary w-50">Comprar</button>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item ">An item</li>
                                        <li class="list-group-item">A second item</li>
                                        <li class="list-group-item">A third item</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <h2>{products.name} </h2>
                            <p>${products.precio}</p>
                            <img src={products.image} alt="Producto 1" /> */}
                        </>
                        )
                
                })}

            </div>
    
        
    )
}

export default Productos;