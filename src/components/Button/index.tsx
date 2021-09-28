import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Name } from './styles'

interface Props extends RectButtonProps {
    name: string,
    color?: string
}

export function Button({
    name, color, ...rest
}: Props){
  return (
    <Container {...rest} color={color} >
        <Name>{name}</Name>
    </Container>
  );
}