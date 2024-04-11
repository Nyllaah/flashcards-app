import { useDispatch, useSelector } from "react-redux";
import { nextFlashcard, updateStatus } from "../redux/actions";
import { FlashcardType, StateType, StatusType } from "../../types";
import styles from './css/Answer.module.css';
import WordContainer from "./WordContainer";

function Answer(props: {answer: string, id: number}) {
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
      <WordContainer content={props.answer} type={'answer'}/>
      <div className={styles.container}>
        {[1, 2, 3, 4, 5].map((status) => (
          <button
          className={ styles.statusBtn }
          style={{backgroundColor: `var(--status-${status})`}}
          onClick={ (e) => handleClick(e, props.id) }>{status}</button>
        ))}
      </div>
    </>
)}

export default Answer;