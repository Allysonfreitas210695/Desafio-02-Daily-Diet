import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type VariantHeaderMealProps = {
  variant: 'RED_LIGHT' | 'GREEN_LIGHT' | 'GRAY_500'
}

export const Container = styled.View<VariantHeaderMealProps>`
    width: 100%;
    height: 132px;
    background-color: ${({theme, variant}) => {
      return theme.COLORS[variant];
    }};

    justify-content: center;
    align-items: center;

    position: relative;

`;

export const TitleHeader = styled.Text`
    width: 100%;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    text-align: center;
`;

export const IconLeftActionWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
  z-index: 100000;
`;

export const IconLeftAction = styled(ArrowLeft)`
  height: 24px;
  width: 24px;

  color: ${({ theme }) =>  theme.COLORS.GRAY_200};
`;

