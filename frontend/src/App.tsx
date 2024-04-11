import { useSelector, useDispatch } from "react-redux";

import { FlashcardType, StateType } from "../types";
import  data from '../../db/flashcards';

import { getAllFlashcards, startLesson } from "./redux/actions";

import { getCards } from './helpers';
import Flashcard from "./components/Flashcard";
import { useEffect } from "react";

import styles from './App.module.css';
import Button from "./components/Button";

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
        <Button action={ handleClick } content={'Start a Lesson'} />
      </div>
    : <Flashcard />
  )
}

export default App;
