import Flashcard from "./components/Flashcard";
import { FlashcardType } from "../../db/types";
import allFlashcards from '../../db/flashcards';
import { getRandomIds } from './utils';
import { startLesson } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "./redux/reducers/flashcardReducer";


function App() {
  const { onGoingLesson } = useSelector((state: StateType) => state.flashcardReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    const ids: number[] = getRandomIds(allFlashcards.length);
    
    const cards = ids.map((id) => allFlashcards.find((card) => card.id === id));

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
