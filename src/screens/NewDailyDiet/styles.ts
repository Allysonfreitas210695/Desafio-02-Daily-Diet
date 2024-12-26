import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const Context = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    margin-top: -34px;

    width: 100%;
    padding: 32px 24px;

    ${Platform.select({
    ios: `
      shadow-color: #000000;
      shadow-offset: 0px 0px; 
      shadow-opacity: 0.05;
      shadow-radius: 30px;
    `,
    android: `
      elevation: 10; /* Para uma sombra no Android */
    `
  })}
`;

export const ViewContentDataAndHour = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  gap: 16px;
`;


export const ViewButtonAction = styled.View`
  width: 100%;
  margin-top: 60px;
  position: absolute;
  bottom: 24px; 
  left: 24px;
  right: 24px;
`;


export const CheckboxContainer = styled.View`
  margin-top: 24px;
`;

export const CircleIndicator = styled.View<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme, color }) => 
    color === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;

export const CheckboxOption = styled.TouchableOpacity<{ isSelected: boolean | null; active: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme, isSelected, active  }) => {
    if (isSelected !== null && isSelected === true && active) return theme.COLORS.GREEN_DARK;
    if (isSelected !== null && isSelected === false && active) return theme.COLORS.RED_DARK;

    return theme.COLORS.GRAY_600;
  }};
  background-color: ${({ theme, isSelected, active }) => {
    if (isSelected !== null && isSelected === true && active) return theme.COLORS.GREEN_LIGHT; 
    if (isSelected !== null && isSelected === false && active) return theme.COLORS.RED_LIGHT;   
    
    return theme.COLORS.GRAY_600;
  }};
`;


export const CheckboxLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
