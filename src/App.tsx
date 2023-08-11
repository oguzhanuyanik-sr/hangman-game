import { useCallback, useEffect, useState } from 'react';
import styles from './styles/App.module.css';
import words from './api/wordList.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import useKeyPress from './hooks/useKeyPress';

const getWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};

const getResult = (isWinner: boolean, isLoser: boolean) => {
  return isWinner
    ? 'Winner! - Refresh to try again'
    : isLoser
    ? 'Nice Try! - Refresh to try again'
    : '';
};

const App: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useKeyPress(
    (key: string) => {
      addGuessedLetter(key);
    },
    [guessedLetters, isLoser, isWinner]
  );

  return (
    <div className={styles.appContainer}>
      <div className={styles.finalText}>{getResult(isWinner, isLoser)}</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div className={styles.keyboardContainer}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default App;
