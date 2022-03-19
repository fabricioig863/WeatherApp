import { LinearGradient } from "expo-linear-gradient";
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
