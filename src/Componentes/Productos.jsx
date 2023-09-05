
import products from '../data'
import '../css/productos.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Productos = () => {



    const handleComprar = () =>{

        /* alert('Gracias por comprar este Producto.')  */

        /* Swal.fire('Gracias por comprar este Producto!') */

        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })


    }


    return (
        <div className='container'>
            <div>
                <h1 className='m-4 text-center'>Productos para la Venta</h1>
                {products.map((products)=>{

                    /* console.log(products) */
                    
                    console.log(products.name);
                    console.log(products.image);
                    console.log(products.id);
                    
                    return(
                        <>
                            <div className="card miEstilo">
                                <img src={products.image} className="card-img-top" alt="productos" />
                                    <div className="card-body">
                                        <h5 className="card-title"> {products.name} </h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                        <div className='text-center'>
                                            <button onClick={ handleComprar } className="btn btn-primary w-50">Comprar</button>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">An item</li>
                                            <li class="list-group-item">A second item</li>
                                            <li class="list-group-item">A third item</li>
                                        </ul>
                                    </div>
                            </div>
                            {/* <h2>{products.name}</h2>
                            <img src={products.image} alt='Producto 1' />
                            <p>{products.precio}</p> */}
                        </>
                        )
                })}
            </div>
        </div>
    )
}

export default Productos;