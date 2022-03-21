import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const List = styled(FlatList)`
  margin-top: 10px;
  margin-right: 10px;  
`;

export const ForecastDayText = styled.Text`
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
  color: #FFF;
`

export const Icon = styled(Feather)`
  color: #FFF;
  font-size: 20px;
`;