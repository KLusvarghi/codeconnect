import BarraPesquisa from './Components/BarraPesquisa';
import Sidebar from './Components/Sidebar';
import './App.css';
import Filtro from './Components/Filtro';
// import Card from './Components/Card';
import { useEffect, useState } from 'react';
import Ordenacao from './Components/Ordencao';

function App() {
  const [dadosApi, setDadosApi] = useState([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes',
    )
      .then((response) => response.json())
      .then((data) => setDadosApi(data));
      console.log(dadosApi)
  }, []);


  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <BarraPesquisa />
        <Filtro />
        <Ordenacao/>
      </div>
    </div>
  );
}

export default App;
