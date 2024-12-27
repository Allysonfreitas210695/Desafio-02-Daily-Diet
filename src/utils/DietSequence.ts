import { SnackDTO } from "@dtos/SnackDTO";

export function getBestDietSequence(snacks: SnackDTO[]): number {
  const validSnacks = snacks.filter(snack => snack.created_at);

  const sortedSnacks = validSnacks.sort((a, b) => {
    const dateA = new Date(a.created_at!).getTime();
    const dateB = new Date(b.created_at!).getTime();
    return dateA - dateB;
  });

  let maxSequence = 0;
  let currentSequence = 0;

  sortedSnacks.forEach(snack => {
    if (snack.isInDiet) {
      currentSequence++;
      maxSequence = Math.max(maxSequence, currentSequence);
    } else {
      currentSequence = 0;
    }
  });

  return maxSequence;
}
