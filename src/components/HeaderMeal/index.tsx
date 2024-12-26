import { TouchableOpacityProps, ViewProps } from 'react-native'
import React from 'react'
import { Container, IconLeftAction, IconLeftActionWrapper, TitleHeader, VariantHeaderMealProps } from './styles'

type Props = TouchableOpacityProps & VariantHeaderMealProps & {
    title: string;
    handleGoBack: () => void;
}

export function HeaderMeal({ title, handleGoBack, variant = 'GRAY_500', ...rest }: Props) {
  return (
    <Container variant={variant}>
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
