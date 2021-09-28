import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color: ${({theme}) => theme.colors.background_secondary};
 padding-top: 20px;
`;

export const Header = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-between;
position: absolute;
margin: ${getStatusBarHeight()+ 18}px;

margin-left: 24px;
`
export const CarImages = styled.View`
margin-top: ${getStatusBarHeight()+ 32}px;
`

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center'
    },
    showsVerticalScrollIndicator: false
})` 
flex:1
`;

export const Detail = styled.View`
width: 100%; 
flex-direction: row;
justify-content: space-between;
; 
`;

export const Description = styled.View``;

export const Brand = styled.Text` 
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
text-transform: uppercase; 
`;

export const Name = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(25)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};

`;

export const Rent = styled.View` `;

export const Periot = styled.Text` 
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
text-transform: uppercase; `;

export const Price = styled.Text`
color: ${({ theme }) => theme.colors.main};
font-size: ${RFValue(25)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500}`
;

export const About = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};

text-align: justify;
margin-top: 36px;
`

export const Acessories = styled.View`
width: 100%;
flex-direction: row;
flex-wrap: wrap;

align-items: center;
justify-content: space-between;

margin-top: 16px
`




export const RentalPeirod = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 40px;
padding-bottom: 16px;
border-bottom-width: 1px;
border-bottom-color: ${({ theme }) => theme.colors.line} ;
` 
export const CalendarIcon = styled.View`
width: 48px;
height: 48px;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.colors.main};
`
export const DateInfo = styled.View`

`
export const DateTitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
font-size: ${RFValue(10)}px;
color: ${({ theme }) => theme.colors.text};
text-transform: uppercase;
` 
export const DateValue = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_500};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.title};
`

export const RentalPrice = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  align-items: flex-end;
` 
export const PriceTitle = styled.View`

` 
export const PriceValue = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_500};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.title};`

export const PriceTotal = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
font-size: ${RFValue(24)}px;
color: ${({ theme }) => theme.colors.success};
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.colors.background_primary}
`;