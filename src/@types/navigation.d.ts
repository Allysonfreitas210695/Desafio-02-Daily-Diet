import { DailyDietDTO } from "@dtos/DailyDietDTO";

export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        statistic: undefined;
        newDailyDiet: undefined;
        feedback: {
          isInDiet: boolean;
        };
        mealDetails: {
          meal: DailyDietDTO
        }
      }
    }
  }