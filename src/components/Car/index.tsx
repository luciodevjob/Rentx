import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import Fuel from '../../assets/gasoline.svg'
import { Container, Header, Brand, Name, About, Rent, Periot, Price, CarImage, Detail } from './styles';

interface CarData {
    brand: string;
    name: string;
    rent: {
        periot: string;
        price: number;
    }
    image: string;
}

interface Data extends RectButtonProps {
    data: CarData;
}
export function Car({data, ...rest}: Data) {
  return (
    <Container {...rest}>
       
            <Detail>
            <Header>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>
            </Header>

            <About>
                <Rent>
                    <Periot>{data.rent.periot}</Periot>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>

                <Fuel width={16} height={21}/>
            </About>
            </Detail>
            <CarImage source={{uri: data.image}}
            resizeMode="contain"/>
      
        
    </Container>
  );
}