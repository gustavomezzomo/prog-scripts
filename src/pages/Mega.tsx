import "../styles/Megasena.css";
import { UseContexto } from '../hooks';
import Megasena from '../components/Megasena';
import Loading from '../components/Loading';

function Mega() {
    const {megasena} = UseContexto();

    return(
        <>
            {megasena.dataApuracao ? <Megasena /> : <Loading />}
        </>
    )
}

export default Mega;