import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "@storage/storageConfig";
import { SnackDTO } from "@dtos/SnackDTO";


export async function snackGetAll(): Promise<SnackDTO[]> {
    try {
        const storage = await AsyncStorage.getItem(SNACK_COLLECTION);

        return storage ? JSON.parse(storage) : [];
    } catch (error) {
        return [];
    }
}