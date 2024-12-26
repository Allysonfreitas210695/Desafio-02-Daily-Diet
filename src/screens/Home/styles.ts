import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};

    margin-bottom: 8px;
    margin-left: 24px;
`;

export const ViewButtonAddSnack = styled.View`
    margin: 0px 24px 32px 24px;
`;

export const ViewCardPercent = styled.View`
    margin-left: 24px;
    margin-right: 24px;
`;