import styles from './Contact.module.css';

export interface IContact {}

const Contact: React.FC<IContact> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default Contact;
