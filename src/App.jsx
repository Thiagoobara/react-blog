import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Sac from "./pages/Sac/Sac";
import NotFound from "./pages/NotFound/NotFound";
import Sobre from "./pages/Sobre/Sobre";
import Login from "./pages/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/sac" element={<Sac/>}  />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/login" element={<Login/>} />
        
        <Route path="*" element={<NotFound/>} />
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Transpiler (Transpilador) -> Babel