import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import theme from '../../styles/theme';

import { Container, Header, Title, RentalPeirod, DateInfo, DateTitle, DateValue, Content, Footer} from './styles';

import ArrowSvg from '../../assets/arrow.svg'; 
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export function Scheduling(){

const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
const navigation = useNavigation()

function handleSchedulingDetail() {
  navigation.navigate("SchedulingDetail");
}

function handleback() {
  navigation.goBack()
}
function handleChangeDate(date: DayProps) {
 let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
 let end = date;

 if(start.timestamp > end.timestamp) {
   start = end;
   end = start;
 }
 setLastSelectedDate(end);
 const interval = generateInterval(start, end);
 setMarkedDates(interval)
}

  return (
    <Container>
         <StatusBar
             barStyle="light-content"
             backgroundColor="transparent"
             translucent
      />
        <Header>
        <BackButton color={theme.colors.background_secondary} onPress={handleback}/>
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
            <Calendar 
            markedDates={markedDates}
            onDayPress={handleChangeDate}

            />
        </Content>

        <Footer>
            <Button name="Confirmar" onPress={handleSchedulingDetail}/>
        </Footer>

    </Container>
  );
}


