import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from "@storage/storageConfig";

import { SnackDTO, SnackSectionListDTO } from "@dtos/SnackDTO";

export async function snackGetAllSection(): Promise<SnackSectionListDTO[]> {
  try {
    const storedSnacks = await AsyncStorage.getItem(SNACK_COLLECTION);

    if (!storedSnacks) return [];

    const snacks: SnackDTO[] = JSON.parse(storedSnacks);

    if (!Array.isArray(snacks)) {
      console.error("Dados de refeições inválidos");
      return [];
    }

    const groupedMeals: { [key: string]: SnackDTO[] } = snacks.reduce((acc, meal) => {
      const [day, month, year] = meal.date.split('/');
      const formattedDate = `${day}.${month}.${year}`;

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }

      acc[formattedDate].push(meal);
      return acc;
    }, {} as { [key: string]: SnackDTO[] });

    const formattedMeals = Object.keys(groupedMeals).map(date => ({
      title: date, 
      data: groupedMeals[date]
    }));

    return formattedMeals;

  } catch (error) {
    console.error("Erro ao recuperar refeições:", error);
    return [];
  }
}
