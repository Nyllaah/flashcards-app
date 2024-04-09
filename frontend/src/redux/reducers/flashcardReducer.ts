import { FlashcardType } from "../../../../db/types";
import { END_LESSON, GET_ALL_FLASHCARDS, NEXT_FLASHCARD, SHOW_ANSWER, START_LESSON, UPDATE_STATUS } from "../actions";

type ActionType = {
  type: string,
  payload: any,
}

export type StateType = {
  flashcardReducer: {
    allFlashcards: FlashcardType[],
    cardIndex: number,
    onGoingLesson: boolean,
    currLessonCards: FlashcardType[],
    visibleAnswer: boolean,
  }
};

const INITIAL_STATE = {
  allFlashcards: [],
  cardIndex: 0,
  onGoingLesson: false,
  currLessonCards: [],
  visibleAnswer: false,
};

const flashcardReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch(action.type) {
    case GET_ALL_FLASHCARDS:
      return {
        ...state,
        allFlashcards: action.payload.allFlashcards,
      };
      
    case START_LESSON:
      return {
        ...state,
        currLessonCards: action.payload.cards,
        onGoingLesson: true,
      };

    case NEXT_FLASHCARD:
      return {
        ...state,
        cardIndex: state.cardIndex + 1,
        visibleAnswer: false,
      };
        
    case SHOW_ANSWER:
      return {
        ...state,
        visibleAnswer: true,
      };

    case END_LESSON:
      return INITIAL_STATE;
    
    case UPDATE_STATUS:
      return {
        ...state,
        allFlashcards: action.payload.cards,
      };

    default:
      return state;
  }
};

export default flashcardReducer;