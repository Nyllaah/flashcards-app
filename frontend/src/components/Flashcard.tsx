import { useSelector, useDispatch  } from 'react-redux';
import { showAnswer } from "../redux/actions";

import Answer from './Answer';
import EndOfLesson from './EndOfLesson';

import { StateType } from '../redux/reducers/flashcardReducer';
import { FlashcardType } from '../../../db/types';

import styles from './css/Flashcard.module.css';
import Button from './Button';

function Flashcard() {
  const { visibleAnswer, cardIndex, currLessonCards } = useSelector((state: StateType) => state.flashcardReducer);
  const currCard:FlashcardType = currLessonCards[cardIndex];
  const dispatch = useDispatch();

  const getStatusColor = (status: number) => {
    switch (status) {
      case 1:
        return 'var(--status-1)';
      case 2:
        return 'var(--status-2)';
      case 3:
        return 'var(--status-3)';
      case 4:
        return 'var(--status-4)';
      case 5:
        return 'var(--status-5)';
    }
  }

  return (
    <div className={styles.flashcard}>
      {cardIndex === currLessonCards.length
      ? <EndOfLesson />
      : <>
        <header
          className={styles.header}
          style={{backgroundColor: getStatusColor(currCard.status)}}
        >
          <span>{cardIndex + 1}</span>
        </header>

        <section>
          <div className={styles.question} style={visibleAnswer ? {height: 'calc(var(--height) / 2)'}: {}}>
            <p>{currLessonCards[cardIndex].question}</p>
          </div>

          {!visibleAnswer 
          ? <Button content={'See Answer'} action={() => dispatch(showAnswer())}/>
          : <Answer answer={currLessonCards[cardIndex].answer} id={currLessonCards[cardIndex].id} />}
          
          <button>End Lesson</button>
        </section>
      </>
      }
    </div>
  )
}

export default Flashcard; 