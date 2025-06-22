import Link from 'next/link';

function CatalogPage() {
  return (
    <>
      <h1>I'm Catalog page</h1>
      <Link href='/'>
        <button>НАЗАД</button>
      </Link>
    </>
  );
}

export default CatalogPage;