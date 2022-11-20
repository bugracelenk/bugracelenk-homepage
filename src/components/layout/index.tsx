import { FC, ReactNode } from 'react';
import Navbar from '../navbar';
import Styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={Styles.layoutWrapper}>
      <div className={Styles.layout}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
