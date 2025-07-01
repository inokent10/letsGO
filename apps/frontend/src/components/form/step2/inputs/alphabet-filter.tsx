import styles from './alphabet-filter.module.scss';

interface AlphabetFilterProps {
  selectedLetter: string;
  onLetterSelect: (letter: string) => void;
}

const ALPHABET = [
  'А', 'Б', 'В', 'Г', 'Д',
  'Е', 'З', 'И', 'К', 'Л',
  'М', 'Н', 'О', 'П', 'Р',
  'С', 'Т', 'У', 'Ф', 'Х',
  'Ч', 'Ш', 'Э', 'Ю', 'Я',
];

function AlphabetFilter({ selectedLetter, onLetterSelect }: AlphabetFilterProps) {
  return (
    <div className={styles.alphabetFilter}>
      {ALPHABET.map(letter => (
        <button
          key={letter}
          className={`${styles.letterButton} ${selectedLetter === letter ? styles.active : ''}`}
          onClick={() => onLetterSelect(selectedLetter === letter ? '' : letter)}
          type='button'
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default AlphabetFilter;