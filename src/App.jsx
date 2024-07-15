import BarraPesquisa from './Components/BarraPesquisa';
import Sidebar from './Components/Sidebar';
import './App.css';
import Filtro from './Components/Filtro';
import Card from './Components/Card';
import { useEffect, useState } from 'react';
import Ordenacao from './Components/Ordencao';

function App() {
  const [dadosApi, setDadosApi] = useState([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes',
    )
      .then((response) => response.json())
      .then((data) => {
        setDadosApi(data);
      });
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <BarraPesquisa />
        <Filtro />
        <Ordenacao />
        <ul className="listaCards">
          {dadosApi
            ? dadosApi.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    tags={item.tags}
                    linhasDeCodigo={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuarioImgem={item.usuario.imagem}
                    usuarioNome={item.usuario.nome}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
