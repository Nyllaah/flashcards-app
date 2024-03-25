import { useDispatch } from "react-redux";
import { showAnswer } from "../redux/actions";
import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/flashcardReducer";

function Question (props: {question: string}) {
  const { cardIndex } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>{cardIndex}</p>
        <p>{props.question}</p>
      </div>
      <button onClick={ () => dispatch(showAnswer()) }>See Answer</button>
    </>
  )
}

export default Question;