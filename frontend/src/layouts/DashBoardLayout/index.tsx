import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export function DashBoardLayout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>🍔 Burger Admin</h2>

        <nav className={styles.menu}>
          <NavLink
            to='/dashboard/orders'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            📦 Pedidos
          </NavLink>

          <NavLink
            to='/dashboard/products'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            🍔 Produtos
          </NavLink>

          <NavLink
            to='/dashboard/customers'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            👥 Clientes
          </NavLink>
        </nav>

        <button className={styles.logout} onClick={logout}>
          Sair
        </button>
      </aside>

      <main className={styles.content}>
        <header className={styles.header}>
          <h1>Painel Administrativo</h1>
        </header>

        <section className={styles.page}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
