import React from 'react';

import { 
  Container,
  WeatherResultsDateText, 
  WeatherResultsCityText, 
  Icon, 
  WeatherResultsTempText 
} from './styles';

const Header = ({ background, weather, icon}) =>  {
  return (
    <Container
      colors={background}
    >
      <WeatherResultsDateText>{weather.results.date}</WeatherResultsDateText>
      <WeatherResultsCityText>{weather.results.city_name}</WeatherResultsCityText>

      <Icon 
        name={icon.name} 
        color={icon.color}
      />

      <WeatherResultsTempText>{weather.results.temp}º</WeatherResultsTempText>

    </Container>
  )
}

export default Header;