import React from 'react';

import { 
  Container, 
  Condition, 
  FeatherIcon, 
  MaterialIcon,
  Title
} from './styles.js'

export function Conditions() {
  return(
    <Container>
      <Condition>
        <FeatherIcon name="wind" />
        <Title>Weather</Title>
      </Condition>

      <Condition>
        <MaterialIcon name="weather-sunset-up" />
        <Title>Weather</Title>
      </Condition>

      <Condition>
        <MaterialIcon name="weather-sunset-up" />
        <Title>Weather</Title>
      </Condition>

      <Condition>
        <MaterialIcon name="weather-sunset-up" />
        <Title>Weather</Title>
      </Condition>

    </Container>
  )
}