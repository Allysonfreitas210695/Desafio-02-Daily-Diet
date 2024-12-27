import React, { useCallback, useState } from 'react';
import { Alert, Dimensions } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Percent } from '@components/Percent';
import CardStatistic from '@components/CardStatistic';

import { CardInfoTotalSnack, Container, Context, Title } from './styles';

import { SnackDTO } from '@dtos/SnackDTO';

import { snackGetAll } from '@storage/snack/snackGetAll';
import { getBestDietSequence } from '@utils/DietSequence';

const WIDTH = (Dimensions.get('window').width / 2) - 30;

export default function Statistic() {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState<SnackDTO[]>([]);
  const [bestSequence, setBestSequence] = useState(0);

  const navigation = useNavigation();


  function handleGoBack() {
    navigation.navigate('home');
  }

    async function fetchSnacks (){
        try {
         setLoading(true);
         const snacks = await snackGetAll();
         const bestSequence = getBestDietSequence(snacks);
         
         setMeals(snacks);
         setBestSequence(bestSequence);
        } catch (error) {
         return Alert.alert('Erro', 'Ocorreu um erro ao pegar dados das refeições. Tente novamente.', [
                 { text: 'OK' },
               ]);
        }finally{
         setLoading(false);
        }
    };

    useFocusEffect(useCallback(() => {
      fetchSnacks();
    }, []))
      
  return (
    <Container>
      <Percent
        subTitle='das refeições dentro da dieta'
        showIconLeft={true}
        onPressLeftIcon={handleGoBack}
        style={{
          height: 200
        }}
      />

      <Context>
        <Title>Estatísticas gerais</Title>

        <CardStatistic
          total={bestSequence}
          title="melhor sequência de pratos dentro da dieta"
          style={{
            height: 90
          }}
        />

        <CardStatistic
            total={meals.filter(meals => meals.isInDiet).length}
            title="refeições registradas"
            style={{
              height: 90
            }}
          />

          <CardInfoTotalSnack>
            <CardStatistic
              total={meals.filter(meals => meals.isInDiet).length}
              title="refeições dentro da dieta"
              style={{
                width: WIDTH,
                height: 107
              }}
            />
            <CardStatistic
              total={meals.filter(meals => !meals.isInDiet).length}
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