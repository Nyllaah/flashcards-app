import Answer from './Answer';
import { FlashcardProps } from './types';
import { useDispatch } from 'react-redux';
import { showAnswer } from '../redux/actions';
import { useSelector } from 'react-redux';
import { StateType } from '../redux/reducers/flashcardReducer';

function Flashcard(props: FlashcardProps) {
  const { visibleAnswer } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>{props.question}</p>
      </div>
      <button onClick={() => dispatch(showAnswer())}>See Answer</button>
      {visibleAnswer && <Answer answer={props.answer}/>}
    </>
  )
}

export default Flashcard; 