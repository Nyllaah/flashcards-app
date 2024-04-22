import { FlashcardType } from "./types";

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

const getListOfNumbers = (max: number, quantity: number): number[] => {
  const numbers: number[] = [];
  while (numbers.length < quantity) {
    const int = getRandomInt(max);
    
    if (!numbers.includes(int)) {
      numbers.push(int);
    }
  }
  return numbers;
};

const filterByStatus = (flashcards: FlashcardType[], statusNum: number) =>
  flashcards.filter(({ status }) => status === statusNum);

export const getCards = (allFlashcards: FlashcardType[]) => {
  const flashcardsByStatus: FlashcardType[][] = [1, 2, 3, 4, 5].map((status) => {
    return filterByStatus(allFlashcards, status);
  });

  const lessonCards: FlashcardType[] = [];
// TO DO: what if there's less than 5?
// implement spaced repetition
  flashcardsByStatus.forEach((flashcards, index) => {
    if (index === 0) {
      const indexList = getListOfNumbers(flashcards.length, 5);
      const cards = indexList.map((i: number) => flashcards[i]);
      lessonCards.push(...cards);
    }

    if (index === 1) {
      const indexList = getListOfNumbers(flashcards.length, 4);
      const cards = indexList.map((i: number) => flashcards[i]);
      lessonCards.push(...cards);
    }

    if (index === 2) {
      const indexList = getListOfNumbers(flashcards.length, 3);
      const cards = indexList.map((i: number) => flashcards[i]);
      lessonCards.push(...cards);
    }

    if (index === 3) {
      const indexList = getListOfNumbers(flashcards.length, 2);
      const cards = indexList.map((i: number) => flashcards[i]);
      lessonCards.push(...cards);
    }

    if (index === 4) {
      const indexList = getListOfNumbers(flashcards.length, 1);
      const cards = indexList.map((i: number) => flashcards[i]);
      lessonCards.push(...cards);
    }
  });

  return lessonCards;
}

export const cleanWords = (words: string[]) => {
  return words.map((word) => word.replace(/[.,;]+$/, "").toLowerCase())
    .filter((word) => word !== '');
};

export const formatSentences = (sentences: string[]) => {
  return sentences.filter((sentence) => sentence !== ' ')
    .map((sentence) => `${sentence}.`)
}