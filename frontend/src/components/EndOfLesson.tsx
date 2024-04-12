import { useDispatch } from "react-redux";
import { endLesson } from "../redux/actions";
import styles from './css/EndOfLesson.module.css';
import Button from "./Button";

function EndOfLesson () {
  const dispatch = useDispatch();

  return (
    <div className={ styles.container }>
      <h2 className={ styles.title } >Congratulations!</h2>
      <Button content={'Go Back'} action={() => dispatch(endLesson())} />
    </div>
  )
}

export default EndOfLesson;