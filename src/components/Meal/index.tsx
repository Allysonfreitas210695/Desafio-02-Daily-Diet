import React from 'react'
import { SnackDTO } from '@dtos/SnackDTO';

import { CircleIndicator, Container, ContentInfo, Divider, PropsButtonDetails, TextInfoData, TextName } from './styles';

type Props = PropsButtonDetails & {
    data: SnackDTO  
}

export function Meal({ data, ...rest}: Props) {
  return (
    <Container {...rest}>
        <ContentInfo>
            <TextInfoData>{data.hours}</TextInfoData>
            <Divider/>
            <TextName>{data.name}</TextName>
        </ContentInfo>

        <CircleIndicator isInDiet={data.isInDiet}/>
    </Container>
  )
}