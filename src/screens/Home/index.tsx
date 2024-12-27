import React, { useCallback, useState } from 'react';
import { Alert, SectionList, Text, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { Plus } from 'phosphor-react-native';
import { Meal } from '@components/Meal';
import { Loading } from '@components/Loading';

import { snackGetAllSection } from '@storage/snack/snackGetAllSection';
import { snackGetAll } from '@storage/snack/snackGetAll';

import { SnackDTO, SnackSectionListDTO } from '@dtos/SnackDTO';

import { 
  Container, 
  Title, 
  ViewButtonAddSnack, 
  ViewCardPercent
} from './styles';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const [mealsSectionList, setMealsSectionList] = useState<SnackSectionListDTO[]>([]);
  const [meals, setMeals] = useState<SnackDTO[]>([]);
  
  const navigation = useNavigation();

  function handleOpenStatic(){
    navigation.navigate('statistic');
  }

  function handleNewDailyDiet() {
    navigation.navigate('newDailyDiet',{ meal: null });
  }

  const handleNavigate = (meal: SnackDTO) => {
    navigation.navigate('mealDetails', { meal });
  };

  async function fetchSnacks(){
    try {
      setLoading(true);

      const list = await snackGetAll();
      setMeals(list);
    } catch (error) {
      return Alert.alert('Erro', 'Ocorreu um erro ao buscar todas as refeições. Tente novamente.', [
              { text: 'OK' },
            ]);
    }finally{
     setLoading(false);
    }
  }

  async function fetchSnacksForSection(){
    try {
      setLoading(true);

      const list = await snackGetAllSection();
      setMealsSectionList(list);

    } catch (error) {
      return Alert.alert('Erro', 'Ocorreu um erro ao buscar dados para listagem das refeições. Tente novamente.', [
              { text: 'OK' },
            ]);
    }finally{
     setLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchSnacks();
    fetchSnacksForSection();
  }, []))

  return (
    <Container>
      <Header/>

      <ViewCardPercent>
        <Percent
          subTitle='das refeições dentro da dieta'
          style={{ height: 102 }}
          showIconRight={true}
          onPressRightIcon={handleOpenStatic}
        />
      </ViewCardPercent>

      <Title>Refeições</Title>

      <ViewButtonAddSnack>
        <Button
          title='Nova refeição'
          variant='dark'
          isActive={loading}
          onPress={handleNewDailyDiet}
          IconAction={Plus}
        />
      </ViewButtonAddSnack>

    {
      loading ?
      <Loading/> :
      <SectionList
        sections={mealsSectionList}
        keyExtractor={(item) => item.id}
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
          mealsSectionList.length === 0 ? {flex: 1, justifyContent: 'center', alignItems: 'center'} : {}
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
    }
    </Container>
  )
}