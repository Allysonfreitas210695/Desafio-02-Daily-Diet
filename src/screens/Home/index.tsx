import React, { useState } from 'react';
import { SectionList, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { Plus } from 'phosphor-react-native';
import { Meal } from '@components/Meal';

import { DailyDietDTO } from '@dtos/DailyDietDTO';

import { Container, Title, ViewButtonAddSnack, ViewCardPercent } from './styles';

export default function Home() {
  const [meals, setMeals] = useState([ 
    {
      title: '12.08.22',
      data: [
        {
          id: "1",
          date: new Date().toISOString(),
          description: "Xis completo da lancheria do bairro",
          hours: "20:00",
          isInDiet: true,
          name: "X-tudo",
          sequence: 1,
        },
        {
          id: "2",
          date: new Date().toISOString(),
          description: "Xis completo da lancheria do bairro",
          hours: "12:30",
          isInDiet: true,
          name: "Salada",
          sequence: 2,
        },
      ],
    },
    {
      title: '13.08.22',
      data: [
        {
          id: "3",
          date: new Date().toISOString(),
          description: "Xis completo da lancheria do bairro",
          hours: "22:00",
          isInDiet: false,
          name: "Pizza",
          sequence: 1,
        },
      ],
    },

  ])
  
  const navigation = useNavigation();

  function handleOpenStatic(){
    navigation.navigate('statistic');
  }

  function handleNewDailyDiet() {
    navigation.navigate('newDailyDiet');
  }

  const handleNavigate = (meal: DailyDietDTO) => {
    navigation.navigate('mealDetails', { meal });
  };

  return (
    <Container>
      <Header/>

      <ViewCardPercent>
        <Percent
          title='90,86%'
          subTitle='das refeições dentro da dieta'
          style={{ height: 102 }}
          dailyDiet={false}
          showIconRight={true}
          onPressRightIcon={handleOpenStatic}
        />
      </ViewCardPercent>

      <Title>Refeições</Title>

      <ViewButtonAddSnack>
        <Button
          title='Nova refeição'
          variant='dark'
          isActive={true}
          onPress={handleNewDailyDiet}
          IconAction={Plus}
        />
      </ViewButtonAddSnack>

    <SectionList
        sections={meals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Meal 
            data={item} 
            onPress={() => handleNavigate(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>
        )}
        contentContainerStyle={[
          { marginHorizontal: 24 },
          meals.length === 0 ? {flex: 1, justifyContent: 'center', alignItems: 'center'} : {}
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          () => (
            <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 16 }}>Nenhuma refeição adicionada</Text>
                <Text style={{ fontSize: 14 }}>Vamos começar a adicionar?</Text>
            </View>
          )
        }
      />

    </Container>
  )
}