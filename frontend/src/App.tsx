import Flashcard from "./components/Flashcard";
import { FlashcardType } from "../../db/types";
import allFlashcards from '../../db/flashcards';
import { getRandomIds } from './utils';
import store from "./redux/store";
import { startLesson } from "./redux/actions";

const { dispatch } = store;

function App() {
  const state = store.getState();

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
        {!flashcardReducer.onGoingLesson
          ? <button onClick={ handleClick }>Start a Lesson</button>
          : <Flashcard
            question={facurrLessonCards[cardIndex].question}
            answer={currLessonCards[cardIndex].answer}
          />
        }
      </section>
    </>
  )
}

export default App;
