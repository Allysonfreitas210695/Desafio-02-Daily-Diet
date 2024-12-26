import React from 'react'
import {  Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';

import DailyDietSVG from "@assets/dailyDiet.svg";
import OffTheDietSVG from "@assets/offTheDiet.svg";

import { Container, SubTitleFeedback, TextFeedback, ViewImageDailyDiet } from './styles';

type PropsParams = {
  isInDiet: boolean;
}

export default function Feedback() {
  const { COLORS, FONT_FAMILY} = useTheme();

  const route = useRoute();

  const { isInDiet } = route.params as PropsParams;

  return (
    <Container>
      <TextFeedback isInDiet={isInDiet}>
        {isInDiet ? "Continue assim!" : "Que pena!"}</TextFeedback>
      <SubTitleFeedback>
        {isInDiet ? (
          <>
            Você continua <Text style={{ color: COLORS.GRAY_100, fontFamily: FONT_FAMILY.BOLD }}>dentro da dieta</Text>. Muito bem!
          </>
        ) : (
          <>
            Você <Text style={{ color: COLORS.GRAY_100,  fontFamily: FONT_FAMILY.BOLD }}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
          </>
        )}
      </SubTitleFeedback>

      <ViewImageDailyDiet>
        {isInDiet ? <DailyDietSVG /> : <OffTheDietSVG />}
      </ViewImageDailyDiet>

      <Button
        title="Ir para a página inicial"
        onPress={() => console.log("jkdjjdkjk")}
        isActive={true}
        style={{
          width: 191
        }}
        variant='dark'
      />
    </Container>
  )
}