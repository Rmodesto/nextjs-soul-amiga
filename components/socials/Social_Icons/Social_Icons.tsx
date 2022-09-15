import styles from './Social_Icons.module.css';

export interface ISocial_Icons {}

const Social_Icons: React.FC<ISocial_Icons> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default Social_Icons;
