import styles from './ServiceCard.module.css';

export interface IServiceCard {}

const ServiceCard: React.FC<IServiceCard> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default ServiceCard;
