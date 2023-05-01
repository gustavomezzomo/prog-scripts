import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mega from "../pages/Mega";
import Loto from "../pages/Loto";
import Quin from "../pages/Quin";
import Navbar from "../components/Navbar";

function Rotas() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/megasena' element={<Mega />} />
                <Route path='/' element={<Loto />} />
                <Route path='/quina' element={<Quin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;