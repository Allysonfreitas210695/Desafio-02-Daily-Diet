import React from 'react'
import { ButtonActionProps, Container, TextButton } from './styles'

type Props = ButtonActionProps & {
    title: string;
    onPress: () => void;
    IconAction?: React.ComponentType<{ size: number; color: string }>;
}

export function Button({
    onPress,
    title,
    isActive,
    variant,
    IconAction,
    ...rest
}: Props) {
  return (
    <Container 
        onPress={onPress}
        {...rest}
        isActive={isActive}
        variant={variant}
        activeOpacity={0.6}
    >
        {IconAction && <IconAction size={24} color={variant === 'dark' ? '#FFF' : "#000"} />}
        <TextButton variant={variant}>
            {title}
        </TextButton>
    </Container>
  )
}
