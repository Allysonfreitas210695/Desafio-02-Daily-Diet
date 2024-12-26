import React from "react";
import { ViewProps } from "react-native";

import { Container, Title, SubTitle, IconRightAction, IconLeftAction, IconRightActionWrapper, IconLeftActionWrapper } from "./styles";

type Props = ViewProps & {
  title: string;
  subTitle: string;
  dailyDiet?: boolean | null;
  showIconRight?: boolean;
  showIconLeft?: boolean;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
};

export function Percent({
    title,
    subTitle,
    dailyDiet,
    showIconRight = false,
    showIconLeft = false,
    onPressRightIcon,
    onPressLeftIcon,
    ...rest
  }: Props) {
    return (
      <Container {...rest} dailyDiet={dailyDiet}>
        {showIconRight && dailyDiet != null && (
            <IconRightActionWrapper 
            onPress={onPressRightIcon} 
            activeOpacity={0.6}
            >
                <IconRightAction dailyDiet={dailyDiet} />
            </IconRightActionWrapper>
        )}
        {showIconLeft && dailyDiet != null && (
            <IconLeftActionWrapper 
            onPress={onPressLeftIcon} 
            activeOpacity={0.6}
            >
            <IconLeftAction dailyDiet={dailyDiet} />
            </IconLeftActionWrapper>
        )}
        
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    );
  }
  