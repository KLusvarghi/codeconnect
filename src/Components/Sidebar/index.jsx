import Logo from '../../assets/logo.svg';
import Feed from '../../assets/feed.svg';
import Info from '../../assets/info.svg';
import LogOut from '../../assets/logout.svg';
import Perfil from '../../assets/account_circle.svg';
import styles from './Sidebar.module.scss';
import classNames from 'classnames';

function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="logo do CodeConnect" />
      <nav>
        <ul className={styles.listaSidebar}>
          <li>
            <a
              href="#"
              className={classNames({
                [styles.item__link]: true,
                [styles.item__publicacao]: true,
              })}
            >
              Publicar
            </a>
          </li>
          <li>
            <a
              href="#"
              className={classNames({
                [styles.item__link]: true,
                [styles.item__linkAtivo]: true,
              })}
            >
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <img src={Perfil} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <img src={Info} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <img src={LogOut} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
