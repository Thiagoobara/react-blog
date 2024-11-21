import UserCard from "../../components/UserCard/UserCard";
import imgHeloise from "../../assets/heloise.jpg";
import imgThiago from "../../assets/thiago.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Users() {
    return (
        <div>
            <Header />
            <h1>Lista de Usuários</h1>
            <UserCard avatar={imgHeloise} nome="Heloise" idade={30} />
            <UserCard avatar={imgThiago} nome="Thiago" idade={45} ocup="Estudante" />
            <Footer />
        </div>
    );
}

export default Users;