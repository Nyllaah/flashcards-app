import { useSelector, useDispatch  } from 'react-redux';
import { endLesson, showAnswer } from "../redux/actions";

import Answer from './Answer';
import EndOfLesson from './EndOfLesson';
import Button from './Button';

import { StateType } from '../redux/reducers/flashcardReducer';
import { FlashcardType } from '../../../db/types';

import styles from './css/Flashcard.module.css';

function Flashcard() {
  const { visibleAnswer, cardIndex, currLessonCards } = useSelector((state: StateType) => state.flashcardReducer);
  const currCard:FlashcardType = currLessonCards[cardIndex];
  
  const dispatch = useDispatch();

  return (
    <div className={styles.flashcard}>
      {cardIndex === currLessonCards.length
      ? <EndOfLesson />
      : <>
        <header
          className={styles.header}
          style={{backgroundColor: `var(--status-${currCard.status})`}}
        >
          <span>{cardIndex + 1}</span>
        </header>

        <section className={styles.container}>
          <div className={styles.question} onClick={() => dispatch(showAnswer())} style={visibleAnswer ? {height: 'calc(var(--height) / 2)'}: {}}>
            <span>{currCard.question}</span>
          </div>

          {!visibleAnswer 
          ? <Button content={'See Answer'} action={() => dispatch(showAnswer())}/>
          : <Answer answer={currCard.answer} id={currCard.id} />}
          
        </section>
        <footer className={styles.footer}>
          <Button content={'End Lesson'} action={() => dispatch(endLesson())} />
        </footer>
      </>
      }
    </div>
  )
}

export default Flashcard; 