import React from 'react';
import { RFValue} from 'react-native-responsive-fontsize'
import { CarList, Container,Header, HeaderContent,Title } from './styles'
import Logo from '../../assets/logo.svg';
import { StatusBar } from 'react-native';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';


export function Home(){
const navigation = useNavigation()

function handleCarDetail() {
  navigation.navigate("SchedulingDetail");
}
  const CarData = {
    brand: 'audi',
    name:  'RS 5 Coupé',
    rent: {
        periot: 'ao Dia',
        price: 120,
    },
    image:  'https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515593745747.png?s=fill&w=236&h=135&q=70&t=true',
  }
  

  return (
    <Container>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      
        <Header>
      
          <HeaderContent>
          <Logo width={RFValue(108)} height={12}/>


            <Title>Total de 12 carros</Title>
          </HeaderContent>
        </Header>
        <CarList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={item => String(item)}
          renderItem={({item}) => 
          <Car data={CarData}
          onPress={handleCarDetail}
          />}
        />
       
   
    </Container>
  );
}