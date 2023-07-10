import React from "react";
import { CustomButtomProps } from "./interface";
import { Container, Title } from "./style";

export default function Button({ color, title, handlePress }: CustomButtomProps) {
  return (
    <Container color={color} onPress={handlePress}>
      <Title>{title}</Title>
    </Container>
  );
}
