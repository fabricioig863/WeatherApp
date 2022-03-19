import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled(TouchableOpacity)`
  width: 90%;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  justify-content: flex-end;
`; 

export const NextDay = styled.Text`
  font-size: 16px;
  color: #FFF;
  /* margin-horizontal: 5px; */
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: #FFF;
`;

export const List = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: {
    paddingBottom: 10,
  },
})`
  margin-top: 10px,
  margin-left: 10px,
`;
