import { useState } from 'react';
import Answer from './Answer';
import { FlashcardProps } from './types';

function Flashcard(props: FlashcardProps) {
  const [answerVisible, setAnswerVisible] = useState<boolean>(false);
  return (
    <>
      <div>
        <p>{props.question}</p>
      </div>
      <button onClick={() => setAnswerVisible(true)}>See Answer</button>
      {answerVisible && <Answer answer={props.answer}/>}
    </>
  )
}

export default Flashcard; 