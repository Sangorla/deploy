/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/footer.css"

function Footer() {
    return (
        <>
            <div class="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="https://www.cofa.com.ar" target="_blank" className="nav-link px-2 text-body-secondary" rel="noreferrer">Home</a></li>
                        <li className="nav-item"><a href="https://www.cofa.com.ar" target="_blank" className="nav-link px-2 text-body-secondary" rel="noreferrer">Features</a></li>
                        <li className="nav-item"><a href="https://www.cofa.com.ar" target="_blank" className="nav-link px-2 text-body-secondary" rel="noreferrer">Pricing</a></li>
                        <li className="nav-item"><a href="https://www.cofa.com.ar" target="_blank" className="nav-link px-2 text-body-secondary" rel="noreferrer">FAQs</a></li>
                        <li className="nav-item"><a href="https://www.cofa.com.ar" target="_blank" className="nav-link px-2 text-body-secondary" rel="noreferrer">About</a></li>
                    </ul>
                    <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
                </footer>
            </div>
        </>
    )
}

export default Footer; 