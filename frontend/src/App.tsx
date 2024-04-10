import { useSelector, useDispatch } from "react-redux";

import { FlashcardType } from "../../db/types";
import  data from '../../db/flashcards';

import { getAllFlashcards, startLesson } from "./redux/actions";
import { StateType } from "./redux/reducers/flashcardReducer";

import { getCards } from './helpers';
import Flashcard from "./components/Flashcard";
import { useEffect } from "react";

import styles from './App.module.css';

function App() {
  const { onGoingLesson, allFlashcards } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getAllFlashcards(data))}, [])

  const handleClick = () => {
    const cards = getCards(allFlashcards);
    dispatch(startLesson(cards as FlashcardType[]));
  }

  return ( !onGoingLesson
    ? <div className={styles.container}>
        <h1 className={styles.title}>Flashcards</h1>
        <button className={styles.startBtn} onClick={ handleClick }>Start a Lesson</button>
      </div>
    : <Flashcard />
  )
}

export default App;
