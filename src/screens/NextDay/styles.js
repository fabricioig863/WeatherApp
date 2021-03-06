import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #d6d2a5;
`;

export const List = styled(FlatList)`
  margin-bottom: 10px;
`;

export const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-left: 15px;
  align-self: flex-start;
  align-items: center;
  margin-top: 15px;
`;

export const WeekResultCity = styled.Text`
  text-align: center; 
  margin-top: 20px;
  font-size: 18px;
`;