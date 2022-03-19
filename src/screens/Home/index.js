import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import Forcast from "../../components/Forcast";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";
import { Feather } from "@expo/vector-icons";
import api, { key } from "../../services/api";

import { Container, List } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  const [errorMessage, setErroMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: "cloud", color: "#fff" });
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErroMessage("Permissão negada para acesso à localização");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const response = await api.get(
        `/weather?array_limit=5&key=${key}&fields=temp,currently,date,time,condition,condition_code,description,city,humidity,wind_speedy,sunrise,sunset,condition_slug,city_name,forecast,max,min,date,weekday&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
      setWeather(response.data);

      if (response.data.results.currently === "noite") {
        setBackground(["#808080", "#474A51"]);
      }
      if (response.data.results.currently === "dia") {
        setBackground(["#d6d2a5", "#d1ab48"]);
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
  }, []);

  if (loading) {
    return (
      <Container colors={["rgba(255,255,255,0)", "rgba(255,255,255,0)"]}>
        <Loading />
      </Container>
    );
  }

  return (
    <Container colors={background}>
      <Menu />

      <Header background={background} weather={weather} icon={icon} />

      <TouchableOpacity
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          justifyContent: "flex-end",
        }}
        onPress={() => navigation.navigate("NextDay")}
      >
        <Text style={{ marginHorizontal: 5, fontSize: 16, color: "#fff" }}>
          Próximos 10 dias
        </Text>
        <Feather name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>

      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "5%" }}
        data={weather.results.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forcast data={item} />}
      />
    </Container>
  );
}
