import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Percent } from '@components/Percent';
import CardStatistic from '@components/CardStatistic';

import { CardInfoTotalSnack, Container, Context, Title } from './styles';

const WIDTH = (Dimensions.get('window').width / 2) - 30;

export default function Statistic() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <Percent
        title='90,86%'
        subTitle='das refeições dentro da dieta'
        dailyDiet={false}
        showIconLeft={true}
        onPressLeftIcon={handleGoBack}
        style={{
          height: 200
        }}
      />

      <Context>
        <Title>Estatísticas gerais</Title>

        <CardStatistic
          total={4}
          title="melhor sequência de pratos dentro da dieta"
          style={{
            height: 90
          }}
        />

        <CardStatistic
            total={109}
            title="refeições registradas"
            style={{
              height: 90
            }}
          />

          <CardInfoTotalSnack>
            <CardStatistic
              total={32}
              title="refeições dentro da dieta"
              style={{
                width: WIDTH,
                height: 107
              }}
            />
            <CardStatistic
              total={77}
              title="refeições fora da dieta"
              style={{
                width: WIDTH,
                height: 107
              }}
            />
          </CardInfoTotalSnack>

      </Context>
    </Container>
  )
}