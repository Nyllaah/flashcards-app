import { FlashcardType } from "../../../db/types";

export const NEXT_FLASHCARD = 'NEXT_FLASHCARD';
export const START_LESSON = 'START_LESSON';
export const SHOW_ANSWER = 'SHOW_ANSWER';
export const END_LESSON = 'END_LESSON';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const GET_ALL_FLASHCARDS = 'GET_ALL_FLASHCARDS';

export const getAllFlashcards = (allFlashcards: FlashcardType[]) => ({
  type: GET_ALL_FLASHCARDS,
  payload: { allFlashcards },
});

export const startLesson = (cards: FlashcardType[]) => ({
  type: START_LESSON,
  payload: { cards },
});

export const showAnswer = () => ({
  type: SHOW_ANSWER,
});

export const updateStatus = (cards: FlashcardType[]) => ({
  type: UPDATE_STATUS,
  payload: { cards },
});

export const nextFlashcard = () => ({
  type: NEXT_FLASHCARD,
});

export const endLesson = () => ({
  type: END_LESSON,
});

