import { POINTS } from '../form-const';
import styles from './points.module.scss';

interface PointsProps {
activePoint: string
}

function Points({ activePoint }: PointsProps) {

  return (
    <ul className={styles.points}>
      {POINTS.map((point) => (
        <li
          key={point}
          className={point === activePoint ? styles.isActive : ''}
        >
          {point}
        </li>
      ))}
    </ul>
  );
};

export default Points;