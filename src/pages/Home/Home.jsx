import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

const post1 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Gabriel Braga",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://media.istockphoto.com/id/1044794446/pt/foto/the-mount-fuji.jpg?s=612x612&w=is&k=20&c=Jo-K7QY55riOu8m9dyAGdkJfsBf-oa8nOCHgFogz0HY="
};

function Home() {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <Post {...post1} />
            <Footer />
        </div>
    )
}

export default Home;