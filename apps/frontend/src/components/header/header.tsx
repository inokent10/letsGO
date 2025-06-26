import Link from 'next/link';

interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <div className='header'>
      <Link href='/'>
        <img src='/logo_full.svg' alt='log' className='logo' />
      </Link>

      <h1 className='header-title'>{title}</h1>
    </div>
  );
}

export default Header;