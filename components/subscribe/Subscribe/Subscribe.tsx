import styles from './Subscribe.module.css';

export interface ISubscribe {}

const Subscribe: React.FC<ISubscribe> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default Subscribe;
