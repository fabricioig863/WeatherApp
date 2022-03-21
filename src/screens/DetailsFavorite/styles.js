import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #d6d2a5;
`;

export const List = styled(FlatList)`
  margin: 10px;
`;

export const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-left: 15px;
  align-self: flex-start;
  align-items: center;
  margin-top: 15px;
`;

export const Goback = styled.Text`
  font-size: 22px;
`
export const WeekResultCity = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`

export const ForecastDayText = styled.Text`
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
`