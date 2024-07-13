import data from './data.json';
import styles from './Card.module.scss';

export default function Card() {
 


  return (
    <section className={styles.container}>
      {data.map((post) => (
        <article key={post.id} className={styles.card}>
          <div className={styles.cardImg}>
            <img src={post.imgPost} alt="imagem do post" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.contentText}>
              <h3>{post.title}</h3>
              <p>{post.about}</p>
            </div>
            <div className={styles.contentFooter}>
              <ul className={styles.list}>
                <li>
                  <img src="./card/icons/code.svg" alt="icone de codigo" />
                  {post.code}
                </li>
                <li>
                  <img
                    src="./card/icons/share.svg"
                    alt="icone de compartilhamento"
                  />
                  {post.share}
                </li>
                <li>
                  <img src="./card/icons/chat.svg" alt="icone de comentários" />
                  {post.comments}
                </li>
              </ul>
              <div className={styles.footerUser}>
                <img src={post.authorImg} alt="icone da imagem do autor" />
                <p>{post.author}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
