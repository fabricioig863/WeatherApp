import React from 'react';
import { 
  Container, 
  Title,
  Icon,
  WeatherContainer,
  TempMax,
  TempMin 
} from './styles';

import { condition } from '../../utils/conditions';

const Forecast = ({ data }) => {

  let icon = condition(data.condition)

  return (
    <Container>
      <Title>{data.date}</Title>
      <Icon 
        name={icon.name}
        color={icon.color}
        size={25}
      />

      <WeatherContainer>
        <TempMin>{data.min}</TempMin>
        <TempMax>{data.max}</TempMax>
      </WeatherContainer>
    </Container>
  )
}

export default Forecast;