import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type NavbarProps = {
  logo: string;
  altl: string;
};

export function Navbar({ logo, altl }: NavbarProps) {
  return (
    <div>
      <div className={styles.nav}>
        <Link to='/' className={styles.logo_url}>
          <img className={styles.logo} src={logo} alt={altl} />
        </Link>
        <Link to='/'>Fazer Pedido</Link>
        <Link to='/orders'>Pedidos</Link>
      </div>
    </div>
  );
}
