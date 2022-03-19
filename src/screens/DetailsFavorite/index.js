import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Location from "expo-location";

import Forcast from "../../components/Forcast";
import { Feather } from "@expo/vector-icons";

import api, { key } from "../../services/api";
import Loading from "../../components/Loading";
import { useNavigation } from "@react-navigation/native";

import { Container, List, BackButton } from "./styles";

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
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </BackButton>

      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {weather.results.city}
      </Text>
      <Text style={{ textAlign: "center", marginTop: 5, fontSize: 15 }}>
        Previsão para 10 dias
      </Text>

      <List
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={weather.results.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forcast vertical data={item} />}
      />
    </Container>
  );
}
