import classNames from 'classnames';
import styles from './Ordenacao.module.scss';
import { useState } from 'react';

export default function Ordenacao() {
  const ordenacao = ['rescentes', 'mais antigos'];
  const [active, setActicve] = useState(
    new Array(ordenacao.length).fill(false),
  ); // sendo [false, false]

  const handleClick = (index) => {
    const novosAtivos = [...active];
    console.log(novosAtivos);
    for (let i = 0; i < novosAtivos.length; i++) {
      if (novosAtivos[i] == true) {
        if (novosAtivos[i] == novosAtivos.length - 1) {
          novosAtivos[i-1] == false;
        }else{
          novosAtivos[i+1] == false;
        }
      }
    }
    novosAtivos[index] = !novosAtivos[index];
    setActicve(novosAtivos);
  };

  return (
    <ul className={styles.ordenacao}>
      {ordenacao.map((item, index) => (
        <li
          key={index}
          className={classNames({
            [styles.listaOrdenacao]: true,
            [styles.ativo]: active[index],
          })}
          onClick={() => handleClick(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
