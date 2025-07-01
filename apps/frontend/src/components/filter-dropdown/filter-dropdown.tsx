'use client';

import './filter-dropdown.scss';
import type { JSX } from 'react';

interface FilterDropdownProps {
  title: string,
  children: React.ReactNode
}

function FilterDropdown({ title, children }: FilterDropdownProps): JSX.Element {

  return (
    <details className='filter-dropdown'>
      <summary className='filter-dropdown-title'>
        <span>{title}</span>
        <span className='filter-dropdown-arrow'></span>
      </summary>
      <div className='filter-dropdown-content'>{children}</div>
    </details>
  );
}

export default FilterDropdown;