import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function NotFound() {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <p>Oops! Página não encontrada.</p>
            <Link to ="/">Voltar</Link>
            <Footer />
           
            

        </div>
    );
}

export default NotFound;
