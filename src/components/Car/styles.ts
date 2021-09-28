import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 24px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  
`;
export const Detail = styled.View``;

export const Header = styled.View`
padding-bottom: 16px
` 

export const Brand = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
text-transform: uppercase;
` 

export const Name = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(15)}px;
line-height: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};

` 

export const About = styled.View`
flex-direction: row;
align-items: flex-end;
` 

export const Rent = styled.View`
padding-right: 24px;
` 

export const Periot = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
text-transform: uppercase;` 

export const Price = styled.Text`
color: ${({ theme }) => theme.colors.main};
font-size: ${RFValue(15)}px;
line-height: ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
`

export const CarImage = styled.Image`
width: 160px;
height: 92px;`
