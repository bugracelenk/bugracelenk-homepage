import { FC, useEffect } from 'react';
import Styles from './Home.module.css';
import { useState } from 'react';

const Home: FC = () => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecond(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={Styles.hero}>
      <div className="typewriter">
        <h1 className={Styles.heroLarge}>
          hi, my name is <span>Altuğ Buğra Çelenk</span>
        </h1>
      </div>

      {showSecond && (
        <div className="typewriter">
          <h1 className={Styles.heroSmall}>
            I'm a <span>full-stack developer</span> based in Turkey.
          </h1>
        </div>
      )}
    </div>
  );
};

export { Home };
