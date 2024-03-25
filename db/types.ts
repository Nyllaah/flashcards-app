export type FlashcardType = {
    id: number,
    question: string,
    answer: string,
    status: 1 | 2 | 3 | 4 | 5,
}