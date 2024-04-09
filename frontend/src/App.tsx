import { useSelector, useDispatch } from "react-redux";

import { FlashcardType } from "../../db/types";
import  data from '../../db/flashcards';

import { getAllFlashcards, startLesson } from "./redux/actions";
import { StateType } from "./redux/reducers/flashcardReducer";

import { getCards } from './helpers';
import Flashcard from "./components/Flashcard";
import { useEffect } from "react";

function App() {
  const { onGoingLesson, allFlashcards } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getAllFlashcards(data))}, [])

  const handleClick = () => {
    const cards = getCards(allFlashcards);
    dispatch(startLesson(cards as FlashcardType[]));
  }

  return (
    <>
      <header>
        <h1>Let's learn English / Portuguese</h1>
      </header>

      <section>
        {!onGoingLesson
          ? <button onClick={ handleClick }>Start a Lesson</button>
          : <Flashcard />
        }
      </section>
    </>
  )
}

export default App;
