import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";


const post1 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Thiago Obara",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://media.istockphoto.com/id/1044794446/pt/foto/the-mount-fuji.jpg?s=612x612&w=is&k=20&c=Jo-K7QY55riOu8m9dyAGdkJfsBf-oa8nOCHgFogz0HY="
};
const post2 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Pedro",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://media.istockphoto.com/id/1044794446/pt/foto/the-mount-fuji.jpg?s=612x612&w=is&k=20&c=Jo-K7QY55riOu8m9dyAGdkJfsBf-oa8nOCHgFogz0HY="
};
const post3 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Ronaldo",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://media.istockphoto.com/id/1044794446/pt/foto/the-mount-fuji.jpg?s=612x612&w=is&k=20&c=Jo-K7QY55riOu8m9dyAGdkJfsBf-oa8nOCHgFogz0HY="
};
const post4 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Fernando",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://media.istockphoto.com/id/1044794446/pt/foto/the-mount-fuji.jpg?s=612x612&w=is&k=20&c=Jo-K7QY55riOu8m9dyAGdkJfsBf-oa8nOCHgFogz0HY="
};
const post5 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Rubens",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://media.istockphoto.com/id/1044794446/pt/foto/the-mount-fuji.jpg?s=612x612&w=is&k=20&c=Jo-K7QY55riOu8m9dyAGdkJfsBf-oa8nOCHgFogz0HY="
};
const posts = [
    post1,
    post2,
    post3,
    post4,
    post5
];
function Home() {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            {posts.map(post =>{
                return <Post key={post.titulo}{...post}/>
            })}
            <Post {...post1} />
            <Footer />
            
        </div>
    )
}

export default Home;