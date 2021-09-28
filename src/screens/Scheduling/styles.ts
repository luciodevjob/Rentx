import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
    selected: boolean
}
export const Container = styled.View`
  flex: 1;
 
`;

export const Header = styled.View`
width: 100%;
height: 325px;

background-color: ${({theme}) => theme.colors.header};

justify-content: center;

padding: 24px;
padding-top: ${getStatusBarHeight() +30}px
;
` 

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;
    color: ${({ theme }) => theme.colors.background_secondary};

    padding-top: 24px;
`

export const RentalPeirod  = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 32px 0;
`;

export const DateInfo = styled.View`
width: 30%;
`;

export const DateTitle  = styled.Text`
font-family: ${({ theme}) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text};
font-size: ${RFValue(10)}px;

`;

export const DateValue = styled.Text<DateValueProps>`
font-family: ${({ theme}) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.shape};
font-size: ${RFValue(15)}px;

${({selected, theme}) => !selected && css`
border-bottom-width: 1px;
border-bottom-color: ${theme.colors.text};
padding-bottom: 5px;
`}
`;

export const Content  = styled.ScrollView.attrs({
 contentConteinerSyle: {
     paddingBottom: 24
 },
 showsVerticalScrollIndicator: false,
 paddingHorizontal: 24 
})
 ``

export const Footer = styled.View`
 padding: 24px
`