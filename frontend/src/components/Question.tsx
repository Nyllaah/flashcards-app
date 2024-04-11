import { useDispatch } from "react-redux";
import { showAnswer } from "../redux/actions";
import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/flashcardReducer";
import styles from './css/Question.module.css';

function Question (props: {question: string}) {
  const { cardIndex } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();
  return (
    <section className={styles.question}>
      <div>
        <p>{cardIndex}</p>
        <p>{props.question}</p>
      </div>
      <button onClick={ () => dispatch(showAnswer()) }>See Answer</button>
    </section>
  )
}

export default Question;