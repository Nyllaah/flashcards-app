import { useDispatch } from "react-redux";
import { nextFlashcard, updateStatus } from "../redux/actions";
import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/flashcardReducer";
import { FlashcardType, StatusType } from "../../../db/types";

function Answer (props: {answer: string, id: number}) {
  const { allFlashcards } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    const { innerHTML } = e.target as HTMLButtonElement;
    const selectedStatus = +innerHTML as StatusType;
  
    const updated = allFlashcards.map((card: FlashcardType) => card.id === id ? {...card, status: selectedStatus} : card);
    dispatch(updateStatus(updated))
    dispatch(nextFlashcard())
  };

  return (
    <>
      <div>
        <p>{props.answer}</p>
      </div>
      <div>
        <button onClick={ (e) => handleClick(e, props.id) }>1</button>
        <button onClick={ (e) => handleClick(e, props.id) }>2</button>
        <button onClick={ (e) => handleClick(e, props.id) }>3</button>
        <button onClick={ (e) => handleClick(e, props.id) }>4</button>
        <button onClick={ (e) => handleClick(e, props.id) }>5</button>
      </div>
    </>
)}

export default Answer;