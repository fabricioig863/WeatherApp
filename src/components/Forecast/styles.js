import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: #FFF;
  margin-left: 12px;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ vertical }) => (vertical ? "18px" : "15px")};
`;

export const Icon = styled(Ionicons)` 
`;

export const WeatherContainer = styled.View`
  align-items: center;
`;

export const TempMin = styled.Text`
  font-size: 10px;
`;

export const TempMax = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
