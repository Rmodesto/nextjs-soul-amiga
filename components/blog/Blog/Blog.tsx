import styles from './Blog.module.css';

export interface IBlog {}

const Blog: React.FC<IBlog> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default Blog;
