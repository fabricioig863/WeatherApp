import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

import {
  Container,
  BackButton,
  Title,
  CardContainer,
  CityContainer,
  CityContainerTop,
} from "./styles";

export default function FavoritesCity() {
  const navigation = useNavigation();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await AsyncStorage.getItem("@weater/FavoriteCity").then((value) => {
          // console.log(value);
          if (value === null) {
            return;
          } else {
            setCities(JSON.parse(value));
          }
        });
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [navigation, cities]);

  async function removeCity(city) {
    try {
      let citiesJSON = await AsyncStorage.getItem("@weater/FavoriteCity");
      let cityArray = JSON.parse(citiesJSON);
      let alteredCities = cityArray.filter(function (e) {
        return e.results.city !== city;
      });

      await AsyncStorage.setItem(
        "@weater/FavoriteCity",
        JSON.stringify(alteredCities)
      );
      Alert.alert("Cidade removida");
      setCities(alteredCities);
    } catch (error) {
      console.log(error);
    }
  }

  if (cities.length > 0) {
    return (
      <Container>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </BackButton>

        <Title>Cidade favoritadas</Title>

        <CardContainer>
          {cities.length > 0 &&
            cities.map((city, index) => (
              <CityContainer
                key={index}
                onPress={() =>
                  navigation.navigate("DetailsFavorite", {
                    cityName: city.results.city,
                  })
                }
              >
                <CityContainerTop>
                  <Text style={{ fontSize: 16, color: "#fff" }}>
                    {city.results.forecast[0].max} °
                  </Text>
                  <Ionicons
                    name={condition(city.results.condition_slug).name}
                    color={condition(city.results.condition_slug).color}
                    size={25}
                  />
                </CityContainerTop>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#fff" }}>
                    {city.results.city}
                  </Text>
                  <TouchableOpacity
                    onPress={() => removeCity(city.results.city)}
                  >
                    <Feather name="trash" size={18} color="#FFF" />
                  </TouchableOpacity>
                </View>
              </CityContainer>
            ))}
        </CardContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </BackButton>

        <Title>Sem cidades favoritas</Title>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Adicione aqui uma cidade favorita
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
