import "../styles/Lotofacil.css";
import { UseContexto } from '../hooks';
import Lotofacil from '../components/Lotofacil';
import Loading from '../components/Loading';

function Loto() {
    const { lotofacil } = UseContexto();

    return(
        <>
            {lotofacil.dataApuracao ? <Lotofacil/> : <Loading/>}
        </>
    )
}

export default Loto;