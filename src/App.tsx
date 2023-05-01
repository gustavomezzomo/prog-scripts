import { ContextoProvider } from "./contexts/Contexto";
import Rotas from "./routes";

function App() {
 
    return <ContextoProvider> <Rotas /> </ContextoProvider>
     
}

export default App;