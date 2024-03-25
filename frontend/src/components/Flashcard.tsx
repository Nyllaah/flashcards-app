import { useSelector } from 'react-redux';

import Answer from './Answer';
import Question from './Question';
import EndOfLesson from './EndOfLesson';

import { StateType } from '../redux/reducers/flashcardReducer';

function Flashcard() {
  const { visibleAnswer, cardIndex, currLessonCards } = useSelector((state: StateType) => state.flashcardReducer);

  return (
    <>
      {cardIndex === currLessonCards.length
      ? <EndOfLesson />
      : <div>
        <p>{`Current Status: ${currLessonCards[cardIndex].status}`}</p>
          <Question question={currLessonCards[cardIndex].question}/>
          {visibleAnswer && <Answer answer={currLessonCards[cardIndex].answer}/>}
      </div>
      }
    </>
  )
}

export default Flashcard; 