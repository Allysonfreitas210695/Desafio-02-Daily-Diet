import React from 'react'
import { Container, PropsView, TitleCard, TitleTotal } from './style'
import { ViewProps } from 'react-native';

type Props = ViewProps & PropsView &{
    total: number;
    title: string;
}

export default function CardStatistic({ total, title, variant = 'GRAY_600', ...rest }: Props) {
  return (
    <Container 
        variant={variant}
        {...rest}
    >
      <TitleTotal>{total}</TitleTotal>
      <TitleCard>{title}</TitleCard>
    </Container>
  )
}