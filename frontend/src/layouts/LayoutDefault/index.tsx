import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import logo from '../../assets/img/logo.png';
import { Outlet } from 'react-router-dom';

export function LayoutDefault() {
  const alter = 'Faça seu Hamburger';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar logo={logo} altl={alter} />

      {/* AREA QUE CRESCE */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#222',
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
