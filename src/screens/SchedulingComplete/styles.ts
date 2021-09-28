import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({theme}) => theme.colors.header};
  align-items: center;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_600};
color: ${({ theme }) => theme.colors.background_secondary};
font-size: ${RFValue(30)}px;
padding-top: 21px;
padding-bottom: 10px
` 
export const SubTitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(15)}px;
text-align: center;
line-height: 25px;
`

export const ButtonStyle = styled.View`
 width: 80px;
 margin-top: 30px;
`