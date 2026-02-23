import styles from './styles.module.css';
import banner from '../../assets/img/hamburger.png';
import { Link } from 'react-router-dom';
export function Banner() {
  return (
    <div className={styles.main_banner}>
      <div className={styles.main_banner_content}>
        <h1>Zé do Hambúrguer</h1>
        <p>O melhor hambúrguer da cidade</p>
      </div>
      <div className={styles.main_banner_image}>
        <img src={banner} alt='Banner' />
      </div>
      <Link to='/menu' className={styles.main_banner_button}>
        Peça já
      </Link>
    </div>
  );
}
