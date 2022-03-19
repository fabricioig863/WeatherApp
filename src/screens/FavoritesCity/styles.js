import { SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: #d6d2a5;
`;

export const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-left: 15px;
  align-self: flex-start;
  align-items: center;
  margin: 15px;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CityContainer = styled.TouchableOpacity`
  margin: 12px;
  padding: 10px;
  background-color: #615031;
  border-radius: 10px;

  border: 1px solid #d1ab48;
`;

export const CityContainerTop = styled.View`
  width: 150px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;
