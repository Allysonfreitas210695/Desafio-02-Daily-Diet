import { Pressable, PressableProps } from "react-native";
import styled, { css } from "styled-components/native";

export type PropsButtonDetails = PressableProps;

export const Container = styled(Pressable)<PropsButtonDetails>`
    width:  100%;
    height: 49px;
    min-height: 49px;
    
    
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_700};
        border-width: 1px;
        border-color: ${theme.COLORS.GRAY_500};
    `}
    
    border-radius: 6px;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 14px 16px 14px 12px;

    margin-bottom: 8px;
`;

export const ContentInfo = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    gap: 10px;
`;

export const TextInfoData = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        border-color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const Divider = styled.View`

    width: 1px;
    height: 16px;
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_200};
    `}
`

export const TextName = styled.Text`
     ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border-color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}
`;

export const CircleIndicator = styled.View<{ isInDiet: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme, isInDiet }) => 
    isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;