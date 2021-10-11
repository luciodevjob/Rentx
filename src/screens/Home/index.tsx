import React, { useState, useEffect  } from 'react';
import { RFValue} from 'react-native-responsive-fontsize'
import { CarList, Container,Header, HeaderContent,Title } from './styles'
import Logo from '../../assets/logo.svg';
import { StatusBar } from 'react-native';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import{ api} from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../Load';


export function Home(){

  const navigation = useNavigation()
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
 

  function handleCarDetail(car: CarDTO) {
  navigation.navigate("CarDetail", {car});
  }

  useEffect(() => {
    try {
    async function fetchCar() {
      const response = await api.get('/cars')
      setCars(response.data)
    
    }
    fetchCar()
  }
  catch (error) {}
  finally {
    setLoading(false)
  }

   
  },[]);


  

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

        {
        loading ? <Load/> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem= {({item}) => 
          <Car data={item}
          onPress={() => handleCarDetail(item)}
          />
          }
        />
        }
    </Container>
  );
}