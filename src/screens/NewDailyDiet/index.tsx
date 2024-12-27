import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import uuid from 'react-native-uuid';

import { HeaderMeal } from '@components/HeaderMeal';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';

import {
  CheckboxContainer,
  CheckboxLabel,
  CheckboxOption,
  CircleIndicator,
  Container,
  Context,
  ViewButtonAction,
  ViewContentDataAndHour,
} from './styles';
import { snackCreate } from '@storage/snack/snackCreate';
import { SnackDTO } from '@dtos/SnackDTO';
import { snackUpdate } from '@storage/snack/snackUpdate';


type PropsParams = {
  meal: SnackDTO
};

export default function NewDailyDiet() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const route = useRoute();

  const { meal } = route.params as PropsParams;

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [isInDiet, setIsInDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  async function handleFeedback() {
    if (!name || !description || !date || !hours || isInDiet === null) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de cadastrar a refeição.', [
        { text: 'OK' },
      ]);
      return;
    }
    
    try {
      setLoading(true);

      if(meal){
        await snackUpdate({
          id: meal.id,
          name,
          description,
          date,
          hours,
          isInDiet,
          created_at: meal.created_at,
          updated_at: new Date().toISOString()
        });
      }
      else {
          await snackCreate({
            id: uuid.v4(),
            name,
            description,
            date,
            hours,
            isInDiet,
            created_at: new Date().toISOString()
          });
      }

      if(isInDiet != null)
        navigation.navigate('feedback', { isInDiet });

    }catch (err) {
     return Alert.alert('Erro', 'Ocorreu um erro ao cadastrar a refeição. Tente novamente.', [
        { text: 'OK' },
      ]);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if(meal){
      setName(meal.name);
      setDescription(meal.description);
      setDate(meal.date);
      setHours(meal.hours);
      setIsInDiet(meal.isInDiet);
    }
  }, [meal]);

  return (
    <Container>
      <HeaderMeal 
        title="Nova refeição" 
        handleGoBack={handleGoBack} 
        variant='GRAY_500'  
      />

      <Context>
        <ScrollView 
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 100 }}
          keyboardShouldPersistTaps="handled" 
          showsVerticalScrollIndicator={false}
        >
          <InputField
            label="Nome"
            value={name}
            onChange={setName}
            type="text"
            placeholder="Digite o nome da refeição"
          />

          <InputField
            label="Descrição"
            value={description}
            onChange={setDescription}
            type="textarea"
            placeholder="Digite a descrição da refeição"
          />

          <ViewContentDataAndHour>
            <InputField
              label="Data"
              value={date}
              onChange={setDate}
              type="date"
              placeholder="Selecione a data"
              style={{ width: '50%' }}
            />

            <InputField
              label="Hora"
              value={hours}
              onChange={setHours}
              type="time"
              placeholder="Selecione a hora"
              style={{ width: '50%' }}
            />
          </ViewContentDataAndHour>

          <CheckboxContainer>
            <Text style={{ 
              marginBottom: 8, 
              color:  COLORS.GRAY_100, 
              fontSize: FONT_SIZE.MD,
              fontFamily: FONT_FAMILY.BOLD
              }}>
              Está dentro da dieta?
            </Text>

            <View style={{ flexDirection: 'row', gap: 16 }}>
              <CheckboxOption
                onPress={() => {
                  setIsInDiet(true); 
                }}
                isSelected={isInDiet}
                active={isInDiet === true}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <CircleIndicator color="green" />
                <CheckboxLabel>Sim</CheckboxLabel>
              </CheckboxOption>

              <CheckboxOption
                onPress={() => {
                  setIsInDiet(false);
                }}
                isSelected={isInDiet}
                active={isInDiet === false}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <CircleIndicator color="red" />
                <CheckboxLabel>Não</CheckboxLabel>
              </CheckboxOption>
            </View>
          </CheckboxContainer>

        </ScrollView>

        <ViewButtonAction>
          <Button
            title="Cadastrar refeição"
            onPress={handleFeedback}
            variant="dark"
            isActive={loading}
          />
        </ViewButtonAction>

      </Context>
      
    </Container>
  );
}
