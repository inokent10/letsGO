import Link from 'next/link';

function FormPage() {
  return (
    <div>
      <h1>FORM STEP 1</h1>
      <Link href='/form/step2'>
        <button>Это главная страница приложения на asds</button>
      </Link>
    </div>
  );
}

export default FormPage;