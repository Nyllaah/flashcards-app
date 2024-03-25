import Answer from './Answer';
import { FlashcardProps } from './types';
import { useDispatch } from 'react-redux';
import { endLesson, showAnswer } from '../redux/actions';
import { useSelector } from 'react-redux';
import { StateType } from '../redux/reducers/flashcardReducer';

function Flashcard(props: FlashcardProps) {
  const dispatch = useDispatch();
  const { visibleAnswer, cardIndex, currLessonCards } = useSelector((state: StateType) => state.flashcardReducer);

  const handleClick = () => {
    if (cardIndex === currLessonCards.length -1) {
      dispatch(endLesson());
    } else {
      dispatch(showAnswer())
    }
  }

  return (
    <>
      <div>
        <p>{props.question}</p>
      </div>
      <button onClick={ handleClick }>See Answer</button>
      {visibleAnswer && <Answer answer={props.answer}/>}
    </>
  )
}

export default Flashcard; 