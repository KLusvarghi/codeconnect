import { useState } from 'react';
import styles from './BarraPesquisa.module.scss';

export default function BarraPesquisa() {
  const [value, setValue] = useState('')
  return (
    <input
      className={styles.barraPesquisa}
      type="text"
      placeholder="Digite o que você procura"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
