import { useDispatch } from "react-redux";
import { nextFlashcard } from "../redux/actions";

function Answer (props: {answer: string}) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(nextFlashcard());
  return (
    <>
      <div>
        <p>{props.answer}</p>
      </div>
      <div>
        <button onClick={ handleClick }>1</button>
        <button onClick={ handleClick }>2</button>
        <button onClick={ handleClick }>3</button>
        <button onClick={ handleClick }>4</button>
        <button onClick={ handleClick }>5</button>
      </div>
    </>
)}

export default Answer;