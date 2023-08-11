import styles from '../styles/Keyboard.module.css';
import { alphabet } from '../constants/index';

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const Keyboard: React.FC<KeyboardProps> = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className={styles.btnContainer}>
      {alphabet.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        const combinedClass = `${styles.btn} ${
          isActive ? styles.active : isInactive ? styles.inactive : ''
        }`;

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={combinedClass}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
