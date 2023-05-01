import { UseContexto } from "../hooks";
import logoquina from '../assets/trevo-quina.png'
import "../styles/Quina.css";

function Quina() {
    const {quina} = UseContexto();
    return (
        
        <div>
        <div className='row'>
            <div className='column'>
                <div className='image-trevo'>
                    <img
                        src={logoquina}
                        alt='trevo-quina'
                    />
                    <div className='text-quina'>QUINA</div>
                </div>

                <p style={{marginLeft: '45px'}}>
                    Estimativa de prêmio do próximo <br/> concurso. Sorteio em {quina.dataProximoConcurso}:
                </p>

                <div className='text-premio'>
                    R${quina.valorEstimadoProximoConcurso}
                </div>

            </div>
            <div className='column'>
                {quina.dezenas.map((valor) => (
                    <>
                    <div className='circle'>{valor}</div>
                    </>
                 ))}
                <div className='text-acc'>{quina.quantidadeGanhadores}  GANHADORES!</div>
                <p>
                    Concurso {quina.numeroDoConcurso} {quina.dataPorExtenso}
                </p>
            </div>
        </div>

    </div>
    );
}
export default Quina;

