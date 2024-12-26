import React from 'react'
import { DailyDietDTO } from '@dtos/DailyDietDTO';

import { CircleIndicator, Container, ContentInfo, Divider, PropsButtonDetails, TextInfoData, TextName } from './styles';

type Props = PropsButtonDetails & {
    data: DailyDietDTO  
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