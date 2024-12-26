import { TouchableOpacityProps, ViewProps } from 'react-native'
import React from 'react'
import { Container, IconLeftAction, IconLeftActionWrapper, TitleHeader } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    handleGoBack: () => void;
}

export function HeaderMeal({ title, handleGoBack, ...rest }: Props) {
  return (
    <Container >
      <IconLeftActionWrapper 
        {...rest}
        onPress={handleGoBack}
      >
          <IconLeftAction/>
      </IconLeftActionWrapper>
      
      <TitleHeader>{title}</TitleHeader>
    </Container>
  )
}
