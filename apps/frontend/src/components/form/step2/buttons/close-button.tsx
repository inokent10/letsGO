import styles from './buttons.module.scss';

interface CloseButtonProps {
    index: number
    handleOpenClose: (index: number, arg: boolean) => void
}

function CloseButton({ handleOpenClose, index }: CloseButtonProps) {
  return (
    <button
      className={styles.closeButton}
      onClick={() => handleOpenClose(index, false)}
      type='button'
    >
        ×
    </button>
  );
};

export default CloseButton;