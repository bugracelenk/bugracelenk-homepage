import { FC } from 'react';
import Styles from './About.module.css';
import { Link } from 'react-router-dom';

const About: FC = () => {
  return (
    <div className={Styles.aboutWrapper}>
      <h1>About</h1>

      <div className={Styles.paragraphs}>
        <p>
          Altuğ Buğra is a self taught full stack developer based in Turkey with
          a passion for building digital services/stuff he wants. He has a
          background in web development and has worked on a variety of projects
          as a freelancer. He is currently studying Computer Engineering at
          Suleyman Demirel University while working/developing at{' '}
          <Link to="/">T-Fashion</Link>
          &nbsp;as backend developer.
        </p>
      </div>
    </div>
  );
};

export default About;
