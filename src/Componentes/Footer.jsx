
import React from 'react';
import '../css/footer.css'

function Footer() {
    /* el componente debe retornar un sólo elemento */
    return(  
        <React.Fragment>
            <div class="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">Features</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                    <p class="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Footer;

