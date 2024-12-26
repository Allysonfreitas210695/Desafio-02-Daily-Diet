import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type PropsBackgroundColor = {
  dailyDiet?: boolean | null 
};

export const Container = styled.View<PropsBackgroundColor>`
  width: 100%;
  
  margin-bottom: 8px;
  padding: 20px 16px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  position: relative;

  background-color: ${({ theme, dailyDiet }) =>
    dailyDiet === true
      ? theme.COLORS.GREEN_LIGHT
      : dailyDiet === false
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600
  };
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXXL}px;
    line-height: ${theme.LINE_HEIGHT.XXXL}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: ${theme.LINE_HEIGHT.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const IconRightActionWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`;


export const IconRightAction = styled(ArrowUpRight)<PropsBackgroundColor>`
    height: 24px;
    width: 24px;

    color: ${({ theme, dailyDiet }) =>
      dailyDiet === true
        ? theme.COLORS.GREEN_DARK
        : dailyDiet === false
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_400
    };
`;

export const IconLeftActionWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const IconLeftAction = styled(ArrowLeft)<PropsBackgroundColor>`
  height: 24px;
  width: 24px;

  color: ${({ theme, dailyDiet }) =>
    dailyDiet === true
      ? theme.COLORS.GREEN_DARK
      : dailyDiet === false
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_400};
`;