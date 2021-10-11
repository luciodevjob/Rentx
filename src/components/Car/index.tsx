import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../Utils/getAccessoryIcon';
import { Container, Header, Brand, Name, About, Rent, Periot, Price, CarImage, Detail } from './styles';


interface Data extends RectButtonProps {
    data: CarDTO;
}
export function Car({data, ...rest}: Data) {
  const Fuel = getAccessoryIcon(data.fuel_type)
  return (
    <Container {...rest}>
       
            <Detail>
            <Header>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>
            </Header>

            <About>
                <Rent>
                    <Periot>{data.rent.period}</Periot>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>

                <Fuel width={16} height={21}/>
            </About>
            </Detail>
            <CarImage source={{uri: data.thumbnail}}
            resizeMode="contain"/>
      
        
    </Container>
  );
}