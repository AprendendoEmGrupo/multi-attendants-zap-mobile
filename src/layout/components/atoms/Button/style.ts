import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  color: string;
}>`
  padding: 10px 20px;
  border-radius: 10px;
  margin: 20px 0px;
  border: 1px solid ${({ color }) => color};
`;

export const Title = styled.Text`
  font-size: 20px;
`;
