import { useDispatch } from "react-redux";
import { endLesson } from "../redux/actions";

function EndOfLesson () {
  const dispatch = useDispatch();

  return (
    <>
      <p>Congratulations!</p>
      <button onClick={() => dispatch(endLesson())}>Go Back</button>
    </>
  )
}

export default EndOfLesson;