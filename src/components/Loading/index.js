import React from "react";
import { ActivityIndicator, View } from "react-native";

import { Container, Title } from "./styles";

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size={50} color="#e52246" />
      <Title>Carregandos dados da api</Title>
    </Container>
  );
};

export default Loading;
