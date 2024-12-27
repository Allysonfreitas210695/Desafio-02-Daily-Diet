import React, { useEffect, useState } from "react";
import { ViewProps } from "react-native";

import { calculateDietPercentage } from "@storage/snack/calculateDietPercentage";

import { Loading } from "@components/Loading";

import { 
  Container, 
  Title,
  SubTitle, 
  IconRightAction, 
  IconLeftAction, 
  IconRightActionWrapper, 
  IconLeftActionWrapper 
} from "./styles";

type Props = ViewProps & {
  subTitle: string;
  dailyDiet?: boolean | null;
  showIconRight?: boolean;
  showIconLeft?: boolean;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
};

export function Percent({
    subTitle,
    showIconRight = false,
    showIconLeft = false,
    onPressRightIcon,
    onPressLeftIcon,
    ...rest
  }: Props) 
  {
    const [loading, setLoading] = useState(false);
    const [percentage, setPercentage] = useState(0);

   async function fetchPercentage (){
     try {
      setLoading(true);

      const calculatedPercentage = await calculateDietPercentage();
      setPercentage(calculatedPercentage);
     } catch (error) {
      
     }finally{
      setLoading(false);
     }
    };

    useEffect(() => {
      fetchPercentage();
    }, []);

    const dailyDietPercent = percentage >= 50 ? true : (percentage > 0 && percentage < 50) ? false : null;

    if(loading) return <Loading/>;

    return (
     
      <Container {...rest} dailyDiet={dailyDietPercent}>
        {showIconRight && (
            <IconRightActionWrapper 
            onPress={onPressRightIcon} 
            activeOpacity={0.6}
            >
                <IconRightAction dailyDiet={dailyDietPercent} />
            </IconRightActionWrapper>
        )}
        {showIconLeft  && (
            <IconLeftActionWrapper 
            onPress={onPressLeftIcon} 
            activeOpacity={0.6}
            >
            <IconLeftAction dailyDiet={dailyDietPercent} />
            </IconLeftActionWrapper>
        )}
        
        <Title>{percentage.toFixed(2)} %</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    );
  }
  