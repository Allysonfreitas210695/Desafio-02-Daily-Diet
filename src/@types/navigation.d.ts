import { SnackDTO } from "@dtos/SnackDTO";

export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        statistic: undefined;
        newDailyDiet: {
          meal?: SnackDTO | null
        };
        feedback: {
          isInDiet: boolean;
        };
        mealDetails: {
          meal: SnackDTO
        }
      }
    }
  }