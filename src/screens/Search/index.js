import React, { useEffect, useState } from "react";
import { Text, View, Keyboard, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Conditions from "../../components/Conditions";

import api, { key } from "../../services/api";

import {
  Container,
  BackButton,
  SearchBox,
  InputText,
  IconText,
  Header,
  City,
  Date,
  Temp,
} from "./styles";

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);
  const [addCity, setAddCity] = useState([]);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);

  async function handleSearch() {
    setFavorite(false);
    const response = await api.get(
      `/weather?array_limit=2&key=${key}&fields=currently,temp,date,time,condition_code,description,city,humidity,wind_speedy,sunrise,sunset,condition_slug,city_name,forecast,max,min,date,weekday&city_name=${input}`
    );

    if (response.data.by === "default") {
      setError("Cidade, não encontrada!");
      setInput("");
      setCity(null);
      setFavorite(false);
      Keyboard.dismiss();
      return;
    }

    if (response.data.by === "city_name") {
      setAddCity((addCity) => [...addCity, response.data]);
    }

    if (response.data.results.currently === "noite") {
      setBackground(["#0c3741", "#0f2f61"]);
    }
    if (response.data.results.currently === "dia") {
      setBackground(["#d1ab48", "#d6d2a5"]);
    }

    setCity(response.data);
    setInput("");
    Keyboard.dismiss();
  }

  async function handleAddCity() {
    try {
      await AsyncStorage.setItem(
        "@weater/FavoriteCity",
        JSON.stringify(addCity)
      );
      setFavorite(!favorite);
      if (favorite === true) {
        setFavorite(true);
        Alert.alert("Cidade já adicionada");
        setCity(null);
      } else {
        Alert.alert("Cidade adicionada");
        setCity(null);
      }
    } catch (e) {
      console.log(e);
    }
  }

  if (city) {
    return (
      <Container>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </BackButton>

        <SearchBox>
          <InputText
            value={input}
            onChangeText={setInput}
            placeholder="Ex: Fortaleza, CE"
          />
          <IconText onPress={handleSearch}>
            <Feather name="search" size={22} color="#FFF" />
          </IconText>
        </SearchBox>

        <Header colors={background}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <City>{city.results.city}</City>
            <TouchableOpacity onPress={() => handleAddCity()}>
              {favorite === true ? (
                <MaterialIcons name="star" size={30} color="#FFF" />
              ) : (
                <MaterialIcons name="star-border" size={30} color="#FFF" />
              )}
            </TouchableOpacity>
          </View>
          <Date>{city.results.date}</Date>

          <View>
            <Temp>{city.results.temp}°</Temp>
          </View>

          <Conditions weather={city} />
        </Header>
      </Container>
    );
  }
  return (
    <Container>
      <BackButton onPress={() => navigation.navigate("Home")}>
        <Feather name="chevron-left" size={32} color="#000" />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </BackButton>

      <SearchBox>
        <InputText
          value={input}
          onChangeText={setInput}
          placeholder="Ex: Fortaleza, CE"
        />
        <IconText onPress={handleSearch}>
          <Feather name="search" size={22} color="#FFF" />
        </IconText>
      </SearchBox>

      {error && <Text style={{ marginTop: 25, fontSize: 18 }}>{error}</Text>}
    </Container>
  );
}
