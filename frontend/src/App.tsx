import { useSelector, useDispatch } from "react-redux";

import { FlashcardType } from "../../db/types";
import allFlashcards from '../../db/flashcards';

import { startLesson } from "./redux/actions";
import { StateType } from "./redux/reducers/flashcardReducer";

import { getCards } from './helpers';
import Flashcard from "./components/Flashcard";

function App() {
  const { onGoingLesson } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();

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
