import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles.module.css';

type NavbarProps = {
  logo: string;
  altl: string;
};

export function Navbar({ logo, altl }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.logo_url} onClick={closeMenu}>
        <img className={styles.logo} src={logo} alt={altl} />
        <h1 className={styles.logo_text}>Zé do Hambúrguer</h1>
      </Link>

      {/* Botão Hamburger */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Links */}
      <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <Link to='/' onClick={closeMenu}>
          Inicio
        </Link>
        <Link to='/menu' onClick={closeMenu}>
          Cardápio
        </Link>
        <Link to='/location' onClick={closeMenu}>
          Localização
        </Link>
        <Link to='/contact' onClick={closeMenu}>
          Contato
        </Link>
        <Link to='/dashboard/orders' onClick={closeMenu}>
          Pedidos
        </Link>
      </div>
    </nav>
  );
}
