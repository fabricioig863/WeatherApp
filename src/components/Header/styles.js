import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled(LinearGradient)`
  width: 95%;
  height: 55%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const WeatherResultsDateText = styled.Text`
  color: #FFF;
  font-size: 17px;
`;

export const WeatherResultsCityText = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;


export const Icon = styled(Ionicons)`
  font-size: 150px;
`;

export const WeatherResultsTempText = styled.Text`
  color: #FFF;
  font-size: 80px;
  font-weight: bold; 
`;

