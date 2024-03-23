import { FlashcardType } from "../../../db/types";

export const NEXT_FLASHCARD = 'NEXT_FLASHCARD';
export const START_LESSON = 'START_LESSON';
export const SHOW_ANSWER = 'SHOW_ANSWER';

export const nextFlashcard = () => ({
  type: NEXT_FLASHCARD,
});

export const startLesson = (cards: FlashcardType[]) => ({
  type: START_LESSON,
  payload: { cards },
});

export const showAnswer = () => ({
  type: SHOW_ANSWER,
})