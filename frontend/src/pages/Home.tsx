import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import { /*getAllFlashcards,*/ startLesson } from "../redux/actions/flashcardActions";

import { FlashcardType, StateType } from "../types";
import  data from '../../../backend/src/database/flashcards';
import { getCards } from '../helpers';
import styles from './css/Home.module.css';


import Flashcard from "../components/Flashcard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

//TO DO Choose a deck

function Home() {
  const { onGoingLesson/*, allFlashcards*/ } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {dispatch(getAllFlashcards(data))}, [])

  const handleClick = () => {
    // const cards = getCards(allFlashcards);
    const cards = getCards(data);
    dispatch(startLesson(cards as FlashcardType[]));
  }

  return ( !onGoingLesson
    ? <>
        <h1 className={styles.title}>Flashcards</h1>
        <Button action={ handleClick } content={'Start a Lesson'} />
        <Button action={() => navigate('/create')} content={'Create New Deck'} />
      </>
    : <Flashcard />
  )
}

export default Home;