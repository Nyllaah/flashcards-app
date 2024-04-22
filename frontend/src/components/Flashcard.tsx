import { useSelector, useDispatch  } from 'react-redux';
import { endLesson, nextFlashcard, showAnswer, updateStatus } from "../redux/actions";

import EndOfLesson from './EndOfLesson';
import Button from './Button';

import { FlashcardType, StateType, StatusType } from '../types';

import styles from './css/Flashcard.module.css';
import WordContainer from './WordContainer';

function Flashcard() {
  const { allFlashcards, visibleAnswer, cardIndex, currLessonCards } = useSelector((state: StateType) => state.flashcardReducer);
  const currCard:FlashcardType = currLessonCards[cardIndex];
  
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    const { innerHTML } = e.target as HTMLButtonElement;
    const selectedStatus = +innerHTML as StatusType;
  
    const updated = allFlashcards.map((card: FlashcardType) => card.id === id ? {...card, status: selectedStatus} : card);
    dispatch(updateStatus(updated))
    dispatch(nextFlashcard())
  };

  return (
    <div className={ styles.flashcard }>
      {cardIndex === currLessonCards.length
      ? <EndOfLesson />
      : <>
        <header
          className={ styles.header }
          style={{ backgroundColor: `var(--status-${currCard.status})` }}
        >
          <span>{ cardIndex + 1 }</span>
        </header>

        <section className={ styles.container }>
          <WordContainer
            content={ currCard.question }
            type={'question'}
            visibleAnswer={ visibleAnswer }
          />

          {!visibleAnswer 
          ? <Button content={'See Answer'} action={ () => dispatch(showAnswer()) }/>
          : <>
              <WordContainer
                content={currCard.answer}
                type={'answer'}
                visibleAnswer={ visibleAnswer }
              />
    
              <div className={styles.statusBtnContainer}>
                {[1, 2, 3, 4, 5].map((status) => (
                  <button
                  className={ styles.statusBtn }
                  style={{backgroundColor: `var(--status-${status})`}}
                  onClick={ (e) => handleClick(e, currCard.id) }>{status}</button>
                ))}
              </div>
            </>
          }
          
        </section>
        <footer className={ styles.footer }>
          <Button content={'End Lesson'} action={ () => dispatch(endLesson()) } />
        </footer>
      </>
      }
    </div>
  )
}

export default Flashcard; 