import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/flashcardReducer";
import { useDispatch } from "react-redux";
import { endLesson } from "../redux/actions";

function EndOfLesson () {
  const { cardIndex } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();

  return (
    <>
      <p>{cardIndex}</p>
      <p>Congratulations!</p>
      <button onClick={() => dispatch(endLesson())}>Go Back</button>
    </>
  )
}

export default EndOfLesson;