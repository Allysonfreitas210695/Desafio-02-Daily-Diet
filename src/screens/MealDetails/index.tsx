import React, { useState } from 'react'
import { PencilSimpleLine, TrashSimple } from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import { DailyDietDTO } from '@dtos/DailyDietDTO';

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

type PropsParams = {
meal: DailyDietDTO
};

export default function MealDetails() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const route = useRoute();

  const { meal } = route.params as PropsParams;

  const navigation = useNavigation();

  return (
    <>
    {
      isVisibleModal &&
      <ModalCustom
        title="Deseja realmente excluir o registro da refeição?"
        visible={isVisibleModal}
        setModalVisible={setIsVisibleModal}
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
                  isActive
                  variant="dark"
                  onPress={() => console.log("Editar")}
                />

                <Button
                  title="Excluir refeição"
                  variant='light'
                  onPress={() => setIsVisibleModal(!isVisibleModal)}
                  IconAction={TrashSimple}
                  isActive={false}
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