import styled from 'styled-components/native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

interface colorProps extends RectButtonProps {
  color?: string;
}
export const Container = styled(RectButton)<colorProps>`
  width: 100%;
  height: 56px;

  align-items: center;
  justify-content: center;
  
  
  background-color: ${({color, theme}) => color ? color : theme.colors.main}
`;

export const Name = styled.Text`
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.background_secondary};
`;
