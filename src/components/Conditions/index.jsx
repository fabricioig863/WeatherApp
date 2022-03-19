import React from 'react';

import { 
  Container, 
  Condition, 
  FeatherIcon, 
  MaterialIcon,
  Title
} from './styles.js'

const Conditions = ({ weather }) =>  {
  return(
    <Container>
      <Condition>
        <FeatherIcon name="wind" />
        <Title>{weather.results.wind_speedy}</Title>
      </Condition>

      <Condition>
        <MaterialIcon name="weather-sunset-up" />
        <Title>{weather.results.sunrise}</Title>
      </Condition>

      <Condition>
        <MaterialIcon name="weather-sunset-up" />
        <Title>{weather.results.sunset}</Title>
      </Condition>

      <Condition>
        <MaterialIcon name="weather-sunset-up" />
        <Title>{weather.results.humidity}</Title>
      </Condition>

    </Container>
  )
}

export default Conditions