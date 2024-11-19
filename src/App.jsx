import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import UserCard1 from "./components/UserCard1/UserCard1"
import imgThiago from "./assets/thiago.jpg" //importando imagem
import imgHeloise from "./assets/heloise.jpg" //importando imagem
import Post from "./components/Post/Post"



function App() {
  return (
    // quando nao for texto colocar em chave
    <>
      <Header />
      <Post />
      <UserCard1 avatar={imgHeloise} nome ="Heloise" idade = {33} />  
      <UserCard1 avatar={imgThiago} nome ="Thiago" idade = {38} ocup = "Estudante"/> 
      <Footer />
    </>
  );
}

export default App;
