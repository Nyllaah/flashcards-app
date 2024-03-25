import { FlashcardType } from "../../../../db/types";
import { END_LESSON, NEXT_FLASHCARD, SHOW_ANSWER, START_LESSON } from "../actions";

type ActionType = {
  type: string,
  payload: any,
}

export type StateType = {
  flashcardReducer: {
    cardIndex: number,
    onGoingLesson: boolean,
    currLessonCards: FlashcardType[],
    visibleAnswer: boolean,
  }
};

const INITIAL_STATE = {
  cardIndex: 0,
  onGoingLesson: false,
  currLessonCards: [],
  visibleAnswer: false,
};

const flashcardReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch(action.type) {
    case START_LESSON:
      return {
        ...state,
        currLessonCards: action.payload.cards,
        onGoingLesson: true,
      };

    case END_LESSON:
      return INITIAL_STATE;

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

    default:
      return state;
  }
};

export default flashcardReducer;