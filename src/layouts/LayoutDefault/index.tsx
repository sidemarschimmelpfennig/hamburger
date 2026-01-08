import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import logo from '../../assets/img/logo.png';
import { Outlet } from 'react-router-dom';

export function LayoutDefault() {
  const alter = 'Make Your Burger';
  return (
    <div>
      <Navbar logo={logo} altl={alter} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
