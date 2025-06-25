'use client';

import { useAppSelector } from '@/src/store/hooks';
import { getItinerary, getQuery } from '@/src/store/tripmates-process/selectors';
import Link from 'next/link';

function StepThre() {
  const query = useAppSelector(getQuery);
  const itinerary = useAppSelector(getItinerary);

  return (
    <div>
      <h1>FORM STEP 3</h1>
      <p>
        <span>Query</span>
        <span>Page: {query.page}</span>
        <span>Limit: {query.limit}</span>
      </p>
      <p>
        <span>Itinerary</span>
        <span>Tripmateas: {itinerary?.tripmatesCount}</span>
        <span>Start: {itinerary?.startDate}</span>
      </p>
      <Link href='/'>
        <button>Это главная третья страница</button>
      </Link>
    </div>
  );
}

export default StepThre;