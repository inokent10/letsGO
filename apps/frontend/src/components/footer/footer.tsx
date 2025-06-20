import styles from './footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <img src='/logo_footer_full.png' alt='logo' className={styles.logo} />
    </div>
  );
}

export default Footer;