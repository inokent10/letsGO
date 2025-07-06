'use client';

import FormSteps from '@/src/components/form/form-steps';
import styles from '../../src/components/form/form-steps.module.scss';

function FormPage() {
  return (
    <div className={styles.container}>
      <h1 className='title-form'>Добавить палан:</h1>
      <FormSteps />
    </div>
  );
}

export default FormPage;