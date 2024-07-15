import styles from './Card.module.scss';

export default function Card({
  ìd,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuarioImgem,
  usuarioNome,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardImg}>
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.contentText}>
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className={styles.contentFooter}>
          <ul className={styles.list}>
            <li>
              <img src="./card/icons/code.svg" alt="icone de codigo" />
              {linhasDeCodigo}
            </li>
            <li>
              <img
                src="./card/icons/share.svg"
                alt="icone de compartilhamento"
              />
              {compartilhamentos}
            </li>
            <li>
              <img src="./card/icons/chat.svg" alt="icone de comentários" />
              {comentarios}
            </li>
          </ul>
          <div className={styles.footerUser}>
            <img src={usuarioImgem} alt="icone da imagem do autor" />
            <p>{usuarioNome}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
