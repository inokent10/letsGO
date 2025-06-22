import Link from 'next/link';

function Footer() {
  return (
    <div className='footer'>
      <Link href='/'>
        <img src='/logo_footer_full.png' alt='logo' className='logo' />
      </Link>
    </div>
  );
}

export default Footer;