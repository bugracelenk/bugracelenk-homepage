import { FC } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Navbar.module.css';
import { useLocation } from 'react-router-dom';

const Navbar: FC = () => {
  const location = useLocation();

  return (
    <nav className={Styles.nav}>
      <div className={Styles.logo}>
        <Link to="/">bugracelenk.dev</Link>
      </div>

      <ul className={Styles.navLinks}>
        <li data-active={location.pathname === '/' && 'true'}>
          <Link to="/">Home</Link>
        </li>
        <li data-active={location.pathname === '/about' && 'true'}>
          <Link to="/about">About</Link>
        </li>
        <li data-active={location.pathname === '/works' && 'true'}>
          <Link to="/works">Works</Link>
        </li>
        <li data-active={location.pathname === '/projects' && 'true'}>
          <Link to="/projects">Projects</Link>
        </li>
        <li data-active={location.pathname === '/contact' && 'true'}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
