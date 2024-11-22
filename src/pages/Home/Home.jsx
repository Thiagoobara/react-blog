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
    imagem: "https://images.unsplash.com/photo-1727974219491-d598f6d44894?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const post3 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Ronaldo",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1605906457463-5eb60f753738?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const post4 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Fernando",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1605206809417-31eed948187f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const post5 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Rubens",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1574236170896-fa78bbb16d59?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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