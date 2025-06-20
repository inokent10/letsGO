import styles from './header.module.scss';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.header}>
      <Link href='/'>
        <img src='/logo_full.svg' alt='log' className={styles.logo} />
      </Link>
    </div>
  );
}

export default Header;