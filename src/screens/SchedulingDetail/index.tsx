import React from 'react';

import { Acessorie } from '../../components/Acessorie';
import { ImageSlider } from '../../components/ImageSlider';
import { Feather} from '@expo/vector-icons'

import { Container, 
  Header, 
  CarImages, 
  Content, 
  Detail, 
  Description, 
  Brand, 
  Name, 
  Rent, 
  Periot, 
  Price, 
  Acessories, 
  Footer, 
  RentalPeirod, 
  CalendarIcon, 
  DateInfo,
  DateTitle, 
  DateValue,
  RentalPrice, 
  PriceTitle, 
  PriceTotal,
  PriceValue
 } from './styles';
import speedSvg from  '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components'
import { Title } from '../Home/styles';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetail(){
  const theme = useTheme()
  const navigation = useNavigation()

  function handleback() {
    navigation.goBack()
  }

  function handleComplete() {
    navigation.navigate("SchedulingComplete");
  }
  return (
    <Container>
        <Header>
         <BackButton onPress={handleback}/>
        </Header>

        <CarImages>
        <ImageSlider 
            imagesUrl={['https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515593745747.png?s=fill&w=236&h=135&q=70&t=true']}
        />
        </CarImages>
        <Content>
          <Detail>
          <Description>
          <Brand>LAMBORGHINI</Brand>
          <Name>Hurancan</Name>
          </Description>
          <Rent>
            <Periot>Ao Dia</Periot>
            <Price>R$ 580</Price>
          </Rent>
          </Detail>
          <Acessories>
          <Acessorie name="380km/h" icon={speedSvg}/>
          <Acessorie name="3.2s" icon={accelerationSvg}/>
          <Acessorie name="800 HP" icon={forceSvg}/>
          <Acessorie name="Gasolina" icon={gasolineSvg}/>
          <Acessorie name="Auto" icon={exchangeSvg}/>
          <Acessorie name="2 pessoas" icon={peopleSvg}/>
          </Acessories>
          
          <RentalPeirod>
            <CalendarIcon>
              <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
              />
            </CalendarIcon>
  
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
            
            <Feather 
            name="chevron-right"
            size={RFValue(15)}
            color={theme.colors.text}
            />
             <DateInfo>
              <DateTitle>até</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeirod>

          <RentalPrice>
            <PriceTitle>
              <Title>Total</Title>
              <PriceValue>R$ 580 x3 diárias</PriceValue>
            </PriceTitle>

            <PriceTotal>R$ 2.900</PriceTotal>
          </RentalPrice>
        </Content>
        <Footer>
           <Button 
           name="Alugar agora!" 
           color={theme.colors.success}
           onPress={() => handleComplete()}
           />
        </Footer>
    </Container>
  );
}