
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'



const Api = () =>{

    //si necesito que sea privada
    /* const URL = 'https://rickandmortyapi.com/api/character'; */

    //creo lo que se llama variables de entorno
    const URLDOS = process.env.REACT_APP_URL;

    console.log(process.env.REACT_APP_URL);

    const [personajes, setPersonajes] = useState([]);

    useEffect(()=>{
        /* 1. fetch('https://rickandmortyapi.com/api/character') */
        /* 2. fetch(URL) */
        /* 3.  */
        fetch('https://rickandmortyapi.com/api/character')
        .then(respuesta => respuesta.json())
        .then(respuesta => setPersonajes(respuesta.results))
        /* .then(respuesta => console.log(personaje)) */
    }, [])


    const imprimir = () =>{
        console.log('Estamos usando eventos en React');
        alert('Estamos usando eventos en React');
        console.log(personajes);
    }


    return(
        <div className='container'>
            <div>
            <h1 className='text-center m-4'>Api Rick</h1>
            
            <div className='text-center'>
                <Button className='w-75 m-4' onClick={ imprimir }>Imprimir Datos en Consola</Button>
            </div>




            <h2 className='text-center m-4'>
                Personajes de la Serie
            </h2>

                <Row>
                    {personajes.map((personaje) => (
                        <Col key={personaje.id}>
                            <div class="card">
                                <img src={personaje.image} class="card-img-top" alt="personaje" />
                                <div class="card-body">
                                    <h5 class="card-title">{personaje.name}</h5>
                                    <p class="card-text">{personaje.species}</p>
                                    <button class="btn btn-primary">Botón para algo..</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                
            </div>
        </div>
    )
}

export default Api;