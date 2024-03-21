import Flashcard from "./components/Flashcard";
import flashcards from '../../db/flashcards';
import { useState } from "react";
import { getRandomIds } from './utils';

function App() {
  const [studySession, setStudySession] = useState<Flashcard[]>([]);
  // const [currentCard, setCurrentCard] = useState<Flashcard>();
  // const [cardIndex, setCardIndex] = useState(0);

  const ids: number[] = getRandomIds(flashcards.length);

  const cards = ids.map((id) => flashcards.find((card) => card.id === id));
  setStudySession(cards as Flashcard[]);

  return (
    <>
    <header>
      <h1>Flashcards</h1>
    </header>
    <body>
      {studySession.map((card) => {
        return <Flashcard question={card.question} answer={card.answer}/>
      })}
    </body>
    </>
  )
}

export default App;
