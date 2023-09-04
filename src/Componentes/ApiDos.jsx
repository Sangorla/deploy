import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Tarjetas from "./Tarjetas";


const ApiDos = () => {
    const URL = "https://rickandmortyapi.com/api/character"

    //const URLDOS = process.env.REACT_APP_URL

    console.log(process.env.REACT_APP_URL);

    const [personajes, setPersonajes] = useState([]);


    useEffect(() => {
        fetch(URL)
        //fetch(URLDOS)
        .then(respuesta => respuesta.json())
        .then(respuesta => setPersonajes(respuesta.results))
        
    }, [])

    const imprimir = () => {
        console.log("Estamos usando eventos en React");
        alert("Estamos usando eventos en React");
        console.log(personajes);

    }
    
    return (
        <div className="container">
            <div className="align-items-center">
                <h1 className="text-center m-4">Api externa</h1>
                <div className="text-center">

            <Button className="w-75 m-4" onClick={imprimir}>Imprimir datos en consola</Button>
                </div>
                <h2 className="text-center m-4">
                    Personajes de la serie
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
    );
}

export default ApiDos;