import React from 'react';
import { 
  Container, 
  WeekdayText,
  Icon,
  WeatherContainer,
  TempMax,
  VerticalContainer,
  DescriptionText  
} from './styles';

import { condition } from '../../utils/condition';
import { Text } from 'react-native';

const Forcast = ({ data, vertical }) => {

  let icon = condition(data.condition)

  return (
    <Container vertical={vertical}>
      <WeekdayText vertical={vertical}>{data.weekday}</WeekdayText>

      <WeatherContainer vertical={vertical}>
        <Text>{data.min}°</Text>
        <TempMax>{data.max}°</TempMax>
      </WeatherContainer>

      {vertical ? (
        <VerticalContainer 
          vertical={vertical}
        >
          <Icon name={icon.name} color={icon.color}  />
          <DescriptionText 
             numberOfLines={2}
             ellipsizeMode="tail"
          >
            {data.description}
          </DescriptionText>
        </VerticalContainer>
      ) : (
        <Icon name={icon.name} color={icon.color}  />
      )}
    </Container>
  )
}

export default Forcast;