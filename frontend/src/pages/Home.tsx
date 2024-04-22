import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import { /*getAllFlashcards,*/ startLesson } from "../redux/actions";

import { FlashcardType, StateType } from "../types";
import  data from '../../../backend/src/database/flashcards';
import { getCards } from '../helpers';
import styles from './Home.module.css';


import Flashcard from "../components/Flashcard";
import Button from "../components/Button";

//TO DO Create new deck button
//TO DO Choose a deck

function Home() {
  const { onGoingLesson/*, allFlashcards*/ } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();

  // useEffect(() => {dispatch(getAllFlashcards(data))}, [])

  const handleClick = () => {
    // const cards = getCards(allFlashcards);
    const cards = getCards(data);
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

export default Home;