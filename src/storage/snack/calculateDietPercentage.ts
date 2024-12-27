import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "../storageConfig";
import { SnackDTO } from "@dtos/SnackDTO";

export async function calculateDietPercentage(): Promise<number> {
  try {
    const storedSnacks = await AsyncStorage.getItem(SNACK_COLLECTION);
    
    if (!storedSnacks) return 0;

    const snacks: SnackDTO[] = JSON.parse(storedSnacks);

    if (!Array.isArray(snacks)) {
      console.error("Dados de refeições inválidos");
      return 0;
    }

    const inDietCount = snacks.filter(snack => snack.isInDiet).length;
    const totalCount = snacks.length;

    const percentage = totalCount === 0 ? 0 : (inDietCount / totalCount) * 100;
    return percentage;
  } catch (error) {
    console.error("Erro ao calcular a porcentagem de dieta:", error);
    return 0;
  }
}
