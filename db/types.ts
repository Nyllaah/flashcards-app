export type StatusType = 1 | 2 | 3 | 4 | 5;

export type FlashcardType = {
    id: number,
    question: string,
    answer: string,
    status: StatusType,
}