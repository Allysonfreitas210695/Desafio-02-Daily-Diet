import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

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

export default function NewDailyDiet() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isInDiet, setIsInDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleFeedback() {
    if(isInDiet != null)
      navigation.navigate('feedback', { isInDiet });
  }

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
            label="Texto"
            value={text}
            onChange={setText}
            type="text"
            placeholder="Digite algo..."
          />

          <InputField
            label="Descrição"
            value={textarea}
            onChange={setTextarea}
            type="textarea"
            placeholder="Digite algo..."
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
              value={time}
              onChange={setTime}
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
            isActive={true}
          />
        </ViewButtonAction>

      </Context>
      
    </Container>
  );
}
