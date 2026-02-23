import styles from './styles.module.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <span style={{ fontFamily: 'Righteous' }}>Zé do Hambúrguer </span>{' '}
        &copy; 2025
      </p>
    </div>
  );
}
