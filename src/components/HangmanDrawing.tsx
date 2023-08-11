import styles from '../styles/HangmanDrawing.module.css';
const {
  head,
  body,
  rightArm,
  leftArm,
  rightLeg,
  leftLeg,
  stickFour,
  stickThree,
  stickTwo,
  stickOne,
} = styles;

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({
  numberOfGuesses,
}: HangmanDrawingProps) => {
  const bodyStyles = [head, body, rightArm, leftArm, rightLeg, leftLeg];
  const stickStyles = [stickFour, stickThree, stickTwo, stickOne];

  return (
    <div className={styles.drawingBody}>
      {bodyStyles.slice(0, numberOfGuesses).map((style, index) => (
        <div className={style} key={index}></div>
      ))}

      {stickStyles.map((style, index) => (
        <div className={style} key={index}></div>
      ))}
    </div>
  );
};

export default HangmanDrawing;
