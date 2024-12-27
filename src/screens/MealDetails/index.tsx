import React, { useState } from 'react'
import { PencilSimpleLine, TrashSimple } from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import { SnackDTO } from '@dtos/SnackDTO';

import { HeaderMeal } from '@components/HeaderMeal';
import { Button } from '@components/Button';

import { 
  CircleIndicator, 
  Container, 
  Context, 
  TagStatusDailyDiet, 
  TextDataByHours, 
  TextDescription, 
  TextStatus, 
  TitleDate, 
  TitleName, 
  ViewButtonActions 
} from './styles'
import { ModalCustom } from '@components/ModalCustom';
import { Alert } from 'react-native';
import { snackRemove } from '@storage/snack/snackRemove';

type PropsParams = {
  meal: SnackDTO
};

export default function MealDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const route = useRoute();

  const { meal } = route.params as PropsParams;

  const navigation = useNavigation();

  if(!meal) navigation.goBack();

  async function handleRemoveMeal() {
    try {
      setIsVisibleModal(false);
      setIsLoading(true);
      
      await snackRemove(meal.id);

      navigation.navigate('home')
    } catch (error) {
        return Alert.alert('Erro', 'Ocorreu um erro ao remover a refeição. Tente novamente.', [
                { text: 'OK' },
              ]);
    }finally{
      setIsLoading(false);
    }
  }

  function handleEditMeal() {
    navigation.navigate('newDailyDiet', { meal });
  }

  return (
    <>
    {
      isVisibleModal &&
      <ModalCustom
        title="Deseja realmente excluir o registro da refeição?"
        visible={isVisibleModal}
        setModalVisible={setIsVisibleModal}
        onPressConfirmed={() => handleRemoveMeal()}
      />
    }
    <Container>
        <HeaderMeal
            title='Refeição'
            handleGoBack={() => navigation.navigate('home')}
            variant={meal.isInDiet ? "GREEN_LIGHT" : "RED_LIGHT"}
        />

          <Context>
                <TitleName>{meal?.name}</TitleName>
                <TextDescription>{meal?.description}</TextDescription>
                <TitleDate>Data e hora</TitleDate>
                <TextDataByHours>{meal?.date} às {meal?.hours}</TextDataByHours>
          
                <TagStatusDailyDiet>
                  <CircleIndicator  isInDiet={meal.isInDiet || false}/>
                  <TextStatus>{ meal.isInDiet ?  "dentro da dieta" : "fora da dieta" }</TextStatus>
                </TagStatusDailyDiet>

              <ViewButtonActions>
                <Button
                  title="Editar refeição"
                  IconAction={PencilSimpleLine}
                  style={{
                    marginBottom: 8
                  }}
                  isActive={isLoading}
                  variant="dark"
                  onPress={handleEditMeal}
                />

                <Button
                  title="Excluir refeição"
                  variant='light'
                  onPress={() => setIsVisibleModal(!isVisibleModal)}
                  IconAction={TrashSimple}
                  isActive={isLoading}
                  style={{
                    marginBottom: 8
                  }}
                />
              </ViewButtonActions>
          </Context>
    </Container> 
    </>
  )
}