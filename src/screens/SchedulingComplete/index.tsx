import React from 'react';
import {StatusBar, useWindowDimensions} from 'react-native'
import { Container, Title, SubTitle, ButtonStyle } from './styles';
import LogoBackgroundSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { Button } from '../../components/Button';
import {useTheme} from 'styled-components'
import { useNavigation } from '@react-navigation/native';
export function SchedulingComplete(){
    const {width} = useWindowDimensions()
    const theme = useTheme()

    const navigation = useNavigation()

    function handleHome() {
      navigation.navigate("Home");
    }
  return (
    <Container>
        <StatusBar
             barStyle="light-content"
             backgroundColor="transparent"
             translucent
      />
        <LogoBackgroundSvg width={width}/>
        <DoneSvg width={80} height={80}/>

        <Title>Carro alugado!</Title>
        <SubTitle>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </SubTitle>
        <ButtonStyle>
        <Button 
        name="Ok" color={theme.colors.shape_dark} 
        onPress={() => handleHome()}
        />
        </ButtonStyle>
    </Container>
  );
}