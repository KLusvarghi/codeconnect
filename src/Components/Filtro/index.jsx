import classNames from 'classnames';
import styles from './Filtro.module.scss';
import { useState } from 'react';
export default function Filtro() {
  const [filtros, setFiltros] = useState([
    'front-end',
    'react',
    'acessibilidade',
  ]);
  const [active, setActicve] = useState(new Array(filtros.length).fill(false)); // sendo [false, false, false]

  const handleClick = (index) => {
    const novosAtivos = [...active]; // sendo [false, false, false]
    novosAtivos[index] = !novosAtivos[index]; //invertendo o valor do ativo para o oposto dele
    setActicve(novosAtivos);
  };

  return (
    <section className={styles.container}>
      <div>
        <ul className={styles.filtros}>
          {filtros.map((filtro, index) => (
            <li
              className={classNames({
                [styles.item]: true,
                [styles.active]: active[index],
              })}
              key={index}
              onClick={() => handleClick(index)}
            >
              {filtro}
              {active[index] && (
                <img className={styles.close} src="./close.svg" alt="close" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.btn} onClick={() => setFiltros([])}>
        Limpar Tudo
      </button>
    </section>
  );
}
