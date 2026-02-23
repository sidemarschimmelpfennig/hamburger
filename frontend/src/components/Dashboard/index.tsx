import { Outlet, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className={styles.layout}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>🍔 Burger Admin</h2>

        <nav className={styles.menu}>
          <button onClick={() => navigate('/dashboard/orders')}>
            📦 Pedidos
          </button>

          <button onClick={() => navigate('/dashboard/products')}>
            🍔 Produtos
          </button>

          <button onClick={() => navigate('/dashboard/customers')}>
            👥 Clientes
          </button>
        </nav>

        <button className={styles.logout} onClick={logout}>
          Sair
        </button>
      </aside>

      {/* CONTEÚDO */}
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
