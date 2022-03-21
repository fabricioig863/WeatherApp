import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  flex-direction: row;
  width: 95%;
  justify-content: space-around;
  border-radius: 8px;
`;

export const Condition = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FeatherIcon = styled(Feather)`
  font-size: 23px;
  color: #1ed6ff;
`;

export const MaterialIcon = styled(MaterialCommunityIcons)`
  font-size: 23px;
  color: #1ed6ff;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;