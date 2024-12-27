import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const InputFieldWrapper = styled.View`
  flex-shrink: 1;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const StyledTextInput = styled(TextInput)<{ isMultiline: boolean; isFocused: boolean }>`
  width: 100%;
  padding: ${({ isMultiline }) => (isMultiline ? '8px 14px' : '0px 14px')};
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_500};
  font-size: 16px;
  height: ${({ isMultiline }) => (isMultiline ? '120px' : '48px')};
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
