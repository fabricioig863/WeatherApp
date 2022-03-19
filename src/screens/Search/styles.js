import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #d6d2a5;
`;

export const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-left: 15px;
  align-self: flex-start;
  align-items: center;
  margin: 15px;
`;

export const SearchBox = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #ddd;
  width: 90%;
  height: 60px;
  border-radius: 10px;
`;

export const InputText = styled.TextInput`
  width: 85%;
  height: 60px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 7px;
`;

export const IconText = styled(TouchableOpacity)`
  width: 15%;
  background-color: #d1ab48;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Header = styled(LinearGradient)`
  margin-top: 5%;
  width: 90%;
  height: 65%;
  padding-top: 5%;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export const City = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  margin-right: 30px;
`;

export const Date = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Temp = styled.Text`
  color: #fff;
  font-size: 90px;
  font-weight: bold;
`;
