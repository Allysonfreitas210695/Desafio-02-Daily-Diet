import styled, { css } from "styled-components/native";

export const Container = styled.Modal`
    flex: 1;
    width: 100%;
` 

export const Content = styled.View`
    margin-top: 225px;
    margin-right: 24px;
    margin-left: 24px;

    border-radius: 8px;
    height: 192px;
    z-index: 99999;
    background-color: #FFF;
    
    justify-content: end;
`
export const ViewBackground = styled.View`
    flex: 1;
    background-color: 'rgba(0, 0, 0, 0.25)';
    justify-content: 'center';
    align-items: 'center';
`;

export const TitleModal = styled.Text`
    margin-top: 40px;
    margin-right: 24px;
    margin-left: 24px;
    margin-bottom: 32px;

    width: 279px;

    text-align: center;

    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        line-height: ${theme.LINE_HEIGHT.XL}px;
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const ViewButtonsActions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    align-items: center;

    margin-right: 24px;
    margin-left: 24px;

    gap: 10px;
`