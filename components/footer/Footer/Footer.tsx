import styles from './Footer.module.css';

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default Footer;
