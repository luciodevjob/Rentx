import React from 'react';
import { BackButton } from '../../components/BackButton';
import theme from '../../styles/theme';

import { Container, Header, Title, RentalPeirod, DateInfo, DateTitle, DateValue, Content, Footer} from './styles';

import ArrowSvg from '../../assets/arrow.svg'; 
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
export function Scheduling(){

const navigation = useNavigation()

function handleSchedulingComplete() {
  navigation.navigate("SchedulingComplete");
}
  return (
    <Container>
         <StatusBar
             barStyle="light-content"
             backgroundColor="transparent"
             translucent
      />
        <Header>
        <BackButton color={theme.colors.background_secondary} onPress={() => {}}/>
            <Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
            </Title>

            <RentalPeirod>
            <DateInfo>
                <DateTitle>De</DateTitle>
                <DateValue selected={false}>21/09/2021</DateValue>
            </DateInfo>

            <ArrowSvg width={48} height={10}/>

            <DateInfo>
                <DateTitle>Até</DateTitle>
                <DateValue selected={false}>21/09/2021</DateValue>
            </DateInfo>
        </RentalPeirod>

        </Header>
        
        <Content>
            <Calendar/>
        </Content>

        <Footer>
            <Button name="Confirmar" onPress={() =>  handleSchedulingComplete()}/>
        </Footer>

    </Container>
  );
}


