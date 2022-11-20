import { FC } from 'react';
import Styles from './About.module.css';

const About: FC = () => {
  return (
    <div className={Styles.aboutWrapper}>
      <h1>About</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quidem quos
        necessitatibus voluptatibus quibusdam nesciunt. Quisquam, quae
        voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quidem quos
        necessitatibus voluptatibus quibusdam nesciunt. Quisquam, quae
        voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
      </p>
    </div>
  );
};

export default About;
