import { Flashcard } from '../../../db/types';
import Answer from './Answer';

type FlashcardProps = {
  question: string,
  answer: string,
}

function Flashcard(props: FlashcardProps) {
  return (
    <>
      <div>
        <p>{props.question}</p>
      </div>
      <Answer answer={props.answer}/>
    </>
  )
}

export default Flashcard; 