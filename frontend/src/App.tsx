import Flashcard from "./components/Flashcard";
import { FlashcardType } from "../../db/types";
import allFlashcards from '../../db/flashcards';
import { useState } from "react";
import { getRandomIds } from './utils';

function App() {
  const [lessonCards, setLessonCards] = useState<FlashcardType[]>([]);
  const [ onGoingLesson, setOnGoingLesson ] = useState<boolean>(false);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    const ids: number[] = getRandomIds(allFlashcards.length);
    
    const cards = ids.map((id) => allFlashcards.find((card) => card.id === id));

    setLessonCards(cards as FlashcardType[]);
    setOnGoingLesson(true);
  }

  return (
    <>
      <header>
        <h1>Let's learn English / Portuguese</h1>
      </header>

      <section>
        {!onGoingLesson
          ? <button onClick={ handleClick }>Start a Lesson</button>
          : <Flashcard
            question={lessonCards[index].question}
            answer={lessonCards[index].answer}
          />
        }
      </section>
    </>
  )
}

export default App;
