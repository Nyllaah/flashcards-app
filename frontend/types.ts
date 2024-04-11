export type StatusType = 1 | 2 | 3 | 4 | 5;

export type FlashcardType = {
    id: number,
    question: string,
    answer: string,
    status: StatusType,
}

export type ActionType = {
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