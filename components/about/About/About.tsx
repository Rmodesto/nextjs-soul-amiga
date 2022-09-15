import styles from './About.module.css';

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default About;
