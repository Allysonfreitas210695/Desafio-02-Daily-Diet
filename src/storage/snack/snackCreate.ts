import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "../storageConfig";
import { SnackDTO } from "@dtos/SnackDTO";
import { snackGetAll } from "./snackGetAll";

export async function snackCreate(item: SnackDTO){
    try {
    const storage = await snackGetAll();
    const updatedStorage = [...storage, item];

    await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(updatedStorage));
  } catch (e) {
    console.error("Erro ao criar refeição:", e);
    throw e;
  }
}