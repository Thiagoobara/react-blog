import "./style.css";

function UserCard1(props) {  //desestruturação 
    const carregando = false;

    if (carregando) {
        return (
            <article className="user-card">
                <p>Carregando...</p>

            </article>
        )
    }


    return (
        <article className="user-card">
            <img src={props.avatar} alt="Foto de Perfil" width={300} />

            <h2>Nome:{props.nome} </h2>
            <p>Idade:{props.idade} </p>
            <p>Ocupação:{props.ocup ? props.ocup : "Não definida"} </p>
            <p>Salario:{props.idade * 1000}</p>

        </article>

    );
};

export default UserCard1;

// props -> propriedades 
