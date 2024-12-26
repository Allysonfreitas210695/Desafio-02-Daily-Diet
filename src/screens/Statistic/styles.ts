import styled, { css } from "styled-components/native";
import { Platform } from 'react-native';

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

export const Title = styled.Text`
    text-align: center;
    
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
    `}

    margin-bottom: 24px;
`;


export const CardInfoTotalSnack = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 8px;
`;