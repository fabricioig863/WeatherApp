import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: #FFF;
  margin-left: ${({ vertical }) => (vertical ? "0" : "12px")};
  margin-top: ${({ vertical }) => (vertical ? "5px" : "0")};
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${({ vertical }) => (vertical ? "0px" : "15px")};
  padding-right: ${({ vertical }) => (vertical ? "0px" : "15px")};
  flex-direction: ${({ vertical }) => (vertical ? "row" : "column")};
  justify-content: ${({ vertical }) =>
    vertical ? "space-around" : "space-around"};
`;

export const WeekdayText = styled.Text`
  font-size: ${({ vertical }) => (vertical ? "18px" : "15px")};
`;

export const Icon = styled(Ionicons)` 
  font-size: 25px;
`;

export const WeatherContainer = styled.View`
  flex-direction: ${({ vertical }) => (vertical ? "row" : "column")};
  align-items: center;
`;

export const TempMax = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

export const VerticalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 140px;
  justify-content: space-between;
`;

export const DescriptionText  = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  text-align: center;
`