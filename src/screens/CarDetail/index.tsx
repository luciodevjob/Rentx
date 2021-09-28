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
export function CarDetail(){
  return (
    <Container>
        <Header>
         <BackButton onPress={() => {}}/>
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
          <About>
            Este é automóvel desportivo. Surgiu do lendário touro de 
            lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
          </About>
        </Content>
        <Footer>
           <Button name="Escolher perioto do aluguel" />
        </Footer>
    </Container>
  );
}