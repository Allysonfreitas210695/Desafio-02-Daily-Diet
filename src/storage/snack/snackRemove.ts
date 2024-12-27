import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "@storage/storageConfig";
import { snackGetAll } from "./snackGetAll";


export async function snackRemove(id: string): Promise<void> {
    try {
        const storage = await snackGetAll();

        const storageFilter = storage.filter(x => x.id !== id);
        
        await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(storageFilter));
    } catch (error) {
        console.error("Erro ao remover refeição:", error);
        return;
    }
}