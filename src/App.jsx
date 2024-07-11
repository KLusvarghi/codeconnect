import BarraPesquisa from './Components/BarraPesquisa';
import Sidebar from './Components/Sidebar';
import './App.css';
import Filtro from './Components/Filtro';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className='main'>
        <BarraPesquisa />
        <Filtro />
      </div>
    </div>
  );
}

export default App;
