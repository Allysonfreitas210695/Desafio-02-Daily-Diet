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
    border-radius: 20px;
    margin-top: -34px;

    width: 100%;
    padding: 32px 24px;

    z-index: 100000;

    ${Platform.select({
    ios: `
      shadow-color: #000000;
      shadow-offset: 0px 0px; 
      shadow-opacity: 0.05;
      shadow-radius: 30px;
    `,
    android: `
      elevation: 10;
    `
  })}

  position: 'relative';
`;

export const TitleName = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px;
`;

export const TextDescription = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 24px;
`;

export const TitleDate = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px;
`;


export const TextDataByHours = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 24px;
`;

export const CircleIndicator = styled.View<{ isInDiet: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme, isInDiet }) => 
    isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TagStatusDailyDiet = styled.View`
  padding: 16px 8px;
  width: 150px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-radius: 20px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const TextStatus = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const ViewButtonActions = styled.View`
  position: absolute;
  bottom: 0px;
  right: 24px;
  left: 24px;
  margin-bottom: 10px;
`