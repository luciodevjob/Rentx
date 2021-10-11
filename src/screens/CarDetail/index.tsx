import React from 'react';

import { Acessorie } from '../../components/Acessorie';
import { ImageSlider } from '../../components/ImageSlider';


import { Container, Header, CarImages, Content, Detail, Description, Brand, Name, Rent, Periot, Price, About, Acessories, Footer, } from './styles';
import speedSvg from  '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../Utils/getAccessoryIcon';

interface Params {
  car: CarDTO
}

export function CarDetail(){

  const navigation = useNavigation()
  const route = useRoute()
  
  const {car} = route.params as Params;

  function handleScheduling() {
  navigation.navigate("Scheduling");
  }

  function handleback() {
    navigation.goBack()
  }
  return (
    <Container>
        <Header>
         <BackButton onPress={handleback}/>
        </Header>

        <CarImages>
        <ImageSlider 
            imagesUrl={car.photos}
        />
        </CarImages>
        <Content>
          <Detail>
          <Description>
          <Brand>{car.brand}</Brand>
          <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Periot>{car.rent.period}</Periot>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
          </Detail>
          <Acessories>
          {car.accessories.map(
          accessory => (
          <Acessorie 
          key={accessory.type}
          name= {accessory.name} 
          icon={getAccessoryIcon(accessory.type)}/>
          )
          )}
          </Acessories>
          <About>
            {car.about}
          </About>
        </Content>
        <Footer>
           <Button 
           name="Escolher periodo do aluguel" 
           onPress={handleScheduling}
           />
        </Footer>
    </Container>
  );
}


