import styles from './Navbar.module.css';

export interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default Navbar;
