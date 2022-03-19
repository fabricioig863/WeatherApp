import React, { useState, useEffect } from 'react';

import {
  Container,
  ContainerButton,
  NextDay,
  Icon,
  List
} from './styles'

// para pedir permissao ao user
import * as Location from 'expo-location';

// components
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from "../../components/Forecast";
import Loading from '../../components/Loading';

// api
import api, { key } from '../../services/api';

const Home = () => {

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#FFF' });
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(() => {
    (async () => {
      let { status } =  await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to acess location was denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const response = await api.get(
        `/weather?array_limit=5&key=${key}&fields=temp,currently,date,time,condition,condition_code,description,city,humidity,wind_speedy,sunrise,sunset,condition_slug,city_name,forecast,max,min,date,weekday&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );

      setWeather(response.data);

      if (response.data.results.currently === 'noite') {
        setBackground(['#0c3741', '#0f2f61']);
      }

      if (response.data.results.currently === "dia") {
        setBackground(["#d6d2a5", "#d1ab48"]);
      }

      switch (response.data.condition_slug) {
        case 'clear_day':
          setIcon({ name: 'partly-sunny', color: '#FFB300' });
          break;
        case 'rain':
          setIcon({ name: 'rainy', color: '#FFF' });
          break;
        case 'storm':
          setIcon({ name: 'rainy', color: '#FFF' });
          break;
      }

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container colors={background}>

      <Menu />

      <Header background={background} weather={weather} icon={icon} />

      <Conditions weather={weather} />

      <ContainerButton>
        <NextDay>
          Próximos 10 dias
        </NextDay>

        <Icon
          name="arrow-right"
        />

        <List
          data={weather.results.forecast}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => <Forecast data={item} />}
        />

      </ContainerButton>

    </Container>
  )
}

export default Home;