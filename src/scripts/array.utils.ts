export function shuffleArray<T>(array: T[], seed: number): T[] {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length,
    randomIndex,
    temporaryValue;

  // Use a deterministic random number generator based on the seed
  const seededRandom = (max: number): number => {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  };

  while (currentIndex !== 0) {
    randomIndex = seededRandom(currentIndex);
    currentIndex--;

    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
}
