
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import Tarjetas from "./Tarjetas";



const ApiDos = () =>{

    const misDatos = process.env.REACT_APP_URL

    const [personajes, setPersonajes] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        /* 2. fetch(URL) */
        /* 3.  */
        /* fetch(URLDOS) */
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
                                <Tarjetas personaje={personaje} />
                            </Col>
                    ))}
                </Row>
                
            </div>
        </div>
    )
}

export default ApiDos;