import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "@storage/storageConfig";
import { snackGetAll } from "./snackGetAll";
import { SnackDTO } from "@dtos/SnackDTO";

export async function snackUpdate(snack: SnackDTO): Promise<void> {
  try {
    const storage = await snackGetAll();

    const updatedStorage = storage.map(item => 
      item.id === snack.id ? snack : item
    );
    await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(updatedStorage));
  } catch (error) {
    console.error("Erro ao atualizar a refeição:", error);
    throw error; 
  }
}
