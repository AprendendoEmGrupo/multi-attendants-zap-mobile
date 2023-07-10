import React from "react";
import Button from "../../components/Button";
import { Container, Text } from './style';

export default function Chat({navigation}) {
  return (
    <Container>
      <Text>Tela de Chat</Text>
      <Button 
        handlePress={() => navigation.pop()}
        title="Volta pro Home"
        color="#eee"
      />
    </Container>
  )
}