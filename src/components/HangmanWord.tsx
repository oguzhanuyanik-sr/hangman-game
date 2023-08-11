import styles from '../styles/HangmanWord.module.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord: React.FC<HangmanWordProps> = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className={styles.wordContainer}>
      {wordToGuess.split('').map((letter, index) => {
        const isLetterTrue = guessedLetters.includes(letter);
        const visibility = isLetterTrue || reveal ? 'visible' : 'hidden';
        const color = !isLetterTrue && reveal ? 'red' : 'black';

        return (
          <span className={styles.wordUnderscore} key={index}>
            <span style={{ visibility, color }}>{letter}</span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
