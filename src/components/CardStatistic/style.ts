import styled, { css } from "styled-components/native";

export type PropsView = {
    variant?: 'GRAY_600' | 'GREEN_LIGHT' | "RED_LIGHT"
}

export const Container = styled.View<PropsView>`
    width: 100%;
    background-color: ${({theme, variant}) => {
        if(variant === "GRAY_600") return theme.COLORS.GRAY_600;
        if(variant === "GREEN_LIGHT") return theme.COLORS.GREEN_LIGHT;
        if(variant === "RED_LIGHT") return theme.COLORS.RED_LIGHT;

        return theme.COLORS.GRAY_600;
    }};

    justify-content: center;
    align-items: center;

    border-radius: 8px;
    padding: 16px;

    margin-bottom: 12px;


`; 

export const TitleTotal = styled.Text`
    text-align: center;
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        line-height: ${theme.LINE_HEIGHT.XXL}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`;

export const TitleCard = styled.Text`
    text-align: center;
    margin: 0px 16px;

    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        line-height: ${theme.LINE_HEIGHT.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
`;