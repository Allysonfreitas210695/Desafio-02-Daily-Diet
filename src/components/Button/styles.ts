import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

type VariantProps = {
    variant: 'dark' | 'light';
}

export type ButtonActionProps = TouchableOpacityProps & VariantProps &{
    isActive: boolean;
};

export const Container = styled.TouchableOpacity<ButtonActionProps>`
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;

    height: 50px;
    min-height: 50px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 10px;

   

    background-color: ${({ theme, isActive, variant }) => {
        if(variant === 'dark' && isActive) return theme.COLORS.GRAY_100;
        if(variant === 'dark' && !isActive) return theme.COLORS.GRAY_200;
        if(variant === 'light' && isActive) return theme.COLORS.GRAY_600;   
        if(variant === 'light' && !isActive) return theme.COLORS.GRAY_700;
        return theme.COLORS.GRAY_100;
    }};

    border-width: ${({ theme, variant }) => {
        if(variant === 'dark') return "0px";
        if(variant === 'light') return "2px";  

        return "0px";
    }};

    border-color: ${({ theme, variant }) => {
        if(variant === 'dark') return "none";
        if(variant === 'light') return theme.COLORS.GRAY_100;  
        
        return "none";
    }};
`; 


export const TextButton = styled.Text<VariantProps>`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    text-transform: capitalize;
    line-height: ${({theme}) => theme.LINE_HEIGHT.MD}px;
    
    color: ${({ theme, variant }) => {
        if(variant === 'dark') return theme.COLORS.WHITE;
        if(variant === 'light') return theme.COLORS.GRAY_100;   
        return theme.COLORS.WHITE;
    }};
`