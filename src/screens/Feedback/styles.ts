import styled, { css } from "styled-components/native";

export const Container = styled.View`
    margin-top: 132px;
    margin-right:  24px;
    margin-left: 24px;

    flex: 1;
    align-items: center;
    
`

export const TextFeedback = styled.Text<{isInDiet: boolean}>`
    text-align: center;

    ${({theme, isInDiet}) => css`
        color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        line-height: ${theme.LINE_HEIGHT.XXL}px;
    `}
    margin-bottom: 8px;
`;

export const SubTitleFeedback = styled.Text`
    width: 314px;
    min-width: 314px;

    text-align: center;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}

    margin-bottom: 40px;
`;

export const ViewImageDailyDiet = styled.View`
    align-items: center;
    justify-content: center;

    margin-right:  24px;
    margin-left: 24px;
    margin-bottom: 32px;

    width: 100%;
`