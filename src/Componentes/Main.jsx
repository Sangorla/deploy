
import { Component } from "react"


class Main extends Component {

   
render() {
    return (
            <> 
            <div class="container">
                <form>
                    <div class="mb-3">
                        <label for="nombreProducto" class="form-label">Nombre Producto</label>
                        <input type="text" class="form-control" id="nombreProducto" required />
                    </div>
                    <div class="mb-3">
                        <label for="precioProducto" class="form-label">Precio Producto</label>
                        <input type="number" class="form-control" id="precioProducto" required />
                    </div>
                    <div class="text-center m-5">
                        <button type="button" onclick="cargarProductos()" class="btn btn-primary w-75">
                    Cargar Datos
                        </button>
                    </div>
                    <div class="text-center m-5">
                        <button type="reset" class="btn btn-warning w-75">
                    Borrar Datos
                        </button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default Main;


