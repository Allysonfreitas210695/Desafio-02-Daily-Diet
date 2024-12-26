import React, { useState } from 'react';
import { ViewProps, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { InputFieldWrapper, Label, StyledTextInput } from './styles';

type InputType = 'text' | 'textarea' | 'date' | 'time';

type InputFieldProps = ViewProps & {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  type: InputType;
};

export function InputField({
  label,
  value,
  onChange,
  placeholder,
  type,
  ...rest
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      onChange(selectedDate.toLocaleDateString());
    }
  };

  const handleTimeChange = (event: any, selectedTime: Date | undefined) => {
    setShowTimePicker(false);
    if (selectedTime) {
      onChange(selectedTime.toLocaleTimeString());
    }
  };

  return (
    <InputFieldWrapper {...rest}>
      <Label>{label}</Label>
      {type === 'text' && (
        <StyledTextInput
          isMultiline={false}
          isFocused={isFocused}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          returnKeyType="next"
          onSubmitEditing={Keyboard.dismiss}
        />
      )}
      {type === 'textarea' && (
        <StyledTextInput
          isMultiline={true}
          isFocused={isFocused}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          multiline
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          returnKeyType="default"
        />
      )}
      {type === 'date' && (
        <>
          <StyledTextInput
            isMultiline={false}
            isFocused={isFocused}
            value={value}
            onTouchStart={() => setShowDatePicker(true)}
            placeholder={placeholder}
          />
          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </>
      )}
      {type === 'time' && (
        <>
          <StyledTextInput
            isMultiline={false}
            isFocused={isFocused}
            value={value}
            onTouchStart={() => setShowTimePicker(true)}
            placeholder={placeholder}
          />
          {showTimePicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}
        </>
      )}
    </InputFieldWrapper>
  );
}
