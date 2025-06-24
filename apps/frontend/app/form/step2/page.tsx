import Link from 'next/link';

function StepTwo() {
  return (
    <div>
      <h1>FORM STEP 2</h1>
      <Link href='/form/step3'>
        <button>Это главная вторая страница</button>
      </Link>
    </div>
  );
}

export default StepTwo;
