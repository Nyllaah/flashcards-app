import { NEXT_FLASHCARD, START_LESSON } from "../actions";

type ActionType = {
  type: string,
  payload: any,
}

const INITIAL_STATE = {
  cardIndex: 0,
  onGoingLesson: false,
  currLessonCards: [],
  isLoading: false,
};

const flashcardReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch(action.type) {
    case START_LESSON:
      return {
        ...state,
        currLessonCards: action.payload.cards
      };

    case NEXT_FLASHCARD:
      return {
        ...state,
        cardIndex: state.cardIndex + 1,
      };

    default:
      return state;
  }
};

export default flashcardReducer;