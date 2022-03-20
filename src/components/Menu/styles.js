import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  z-index: 9;
  width: 40px;
  height: 40px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  left: 10px;
  top: 10px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  elevation: 10;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: {
    width: 1px;
    height: 3px;
  }
`;