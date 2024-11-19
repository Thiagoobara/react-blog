import { useState, useEffect } from "react";
import "./style.css";
import Titulo from "../Titulo/Titulo";

function Post() {
    const [curtidas, setCurtidas] = useState(0); 
    const [usuario, setUsuario] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        // Simulando carregamento com setTimeout
        setTimeout(() => {
            setCarregando(false); // Atualiza o estado para "carregamento concluído"
        }, 1000);
    }, []); // O array vazio [] garante que isso só execute uma vez, na montagem do componente

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="post">
            <Titulo>O dolar</Titulo>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quibusdam necessitatibus. 
                Beatae, magni earum? Dolorem harum officia assumenda blanditiis saepe inventore, 
                vero nemo nobis autem adipisci dolorum? Vel, tenetur illo!
            </p>
            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>
        </div>
    );
}

export default Post;
