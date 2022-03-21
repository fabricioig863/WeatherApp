import React, { useState, useEffect } from "react";

import Forcast from "../../components/Forcast";
import { Feather } from "@expo/vector-icons";

import api, { key } from "../../services/api";
import Loading from "../../components/Loading";
import { useNavigation } from "@react-navigation/native";

import { 
  Container, 
  List, 
  BackButton, 
  Goback,
  WeekResultCity,
  ForecastDayText   
} from "./styles";

export default function DetailsFavorite({ route }) {
  const navigation = useNavigation();
  const { cityName } = route.params;

  const [errorMessage, setErroMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: "cloud", color: "#fff" });
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `/weather?&key=${key}&city_name=${cityName}`
      );

      setWeather(response.data);

      if (response.data.results.currently === "noite") {
        setBackground(["#0c3741", "#0f2f61"]);
      }

      switch (response.data.results.condition_slug) {
        case "clear_day":
          setIcon({ name: "partly-sunny", color: "#FFB300" });
          break;
        case "rain":
          setIcon({ name: "rainy", color: "#FFF" });
          break;
        case "storm":
          setIcon({ name: "rainy", color: "#FFF" });
          break;
      }

      setLoading(false);
    })();
  }, [cityName]);

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onPress={() => navigation.navigate("Home")}>
        <Feather name="chevron-left" size={32} color="#000" />
        <Goback>Voltar</Goback>
      </BackButton>

      <WeekResultCity>
        {weather.results.city}
      </WeekResultCity>

      <ForecastDayText>
        Previsão para 10 dias
      </ForecastDayText>

      <List
        showsVerticalScrollIndicator={false}
        data={weather.results.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forcast vertical data={item} />}
      />
    </Container>
  );
}
