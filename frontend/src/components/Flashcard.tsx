import Answer from './Answer';
import { FlashcardProps } from './types';

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