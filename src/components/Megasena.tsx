import { UseContexto } from "../hooks";
import logomegasena from '../assets/trevo-megasena.png'
import "../styles/Megasena.css";

function Megasena() {
    const {megasena} = UseContexto();
    return (
        
        <div>
            <div className='row'>
                <div className='column'>
                    <div className='image-trevo'>
                        <img
                            src={logomegasena}
                            alt='trevo-megasena'
                        />
                        <div className='text-megasena'>MEGA-SENA</div>
                    </div>

                    <p style={{marginLeft: '45px'}}>
                        Estimativa de prêmio do próximo <br/> concurso. Sorteio em {megasena.dataProximoConcurso}:
                    </p>

                    <div className='text-mega-premio'>
                        R${megasena.valorEstimadoProximoConcurso}
                    </div>

                </div>
                <div className='column'>
                    {megasena.dezenas.map((valor) => (
                        <>
                        <div className='circle-mega'>{valor}</div>
                        </>
                     ))}
                    <div className='text-acc'>ACUMULOU!</div>
                    <p>
                        Concurso {megasena.numeroDoConcurso} {megasena.dataPorExtenso}
                    </p>
                </div>
            </div>

        </div>

    );
}
export default Megasena;

