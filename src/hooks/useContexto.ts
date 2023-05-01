import { useContext } from "react";
import { Contexto } from "../contexts";

function UseContexto() {
    const context = useContext(Contexto);
    return context;
}

export default UseContexto;