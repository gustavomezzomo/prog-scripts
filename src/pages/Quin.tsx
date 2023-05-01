import "../styles/Quina.css";
import { UseContexto } from '../hooks';
import Loading from '../components/Loading';
import Quina from "../components/Quina";

function Quin() {
    const { quina } = UseContexto();

    return(
        <>
            {quina.dataApuracao ? <Quina/> : <Loading/>}
        </>
    )
}

export default Quin;