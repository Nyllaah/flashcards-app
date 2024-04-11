import { useSelector } from 'react-redux';

import Answer from './Answer';
import Question from './Question';
import EndOfLesson from './EndOfLesson';

import { StateType } from '../redux/reducers/flashcardReducer';

import styles from './css/Flashcard.module.css';
import { FlashcardType } from '../../../db/types';

function Flashcard() {
  const { visibleAnswer, cardIndex, currLessonCards } = useSelector((state: StateType) => state.flashcardReducer);
  const currCard:FlashcardType = currLessonCards[cardIndex];

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
      : <div>
        <header
          className={styles.header}
          style={{backgroundColor: getStatusColor(currCard.status)}}
        >
          <span>{cardIndex + 1}</span>
        </header>
        <section>
          <Question question={currLessonCards[cardIndex].question}/>
          {visibleAnswer && <Answer answer={currLessonCards[cardIndex].answer} id={currLessonCards[cardIndex].id} />}
          <button>End Lesson</button>
        </section>
      </div>
      }
    </div>
  )
}

export default Flashcard; 