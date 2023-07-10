import React from "react";
import Button from "../../components/Button";
import { Container, Text } from './style';

export default function Home({navigation}) {
  return (
    <Container>
      <Text>Tela Home</Text>
      <Button 
        handlePress={() => navigation.navigate('Chat')}
        title="Vai pro Chat"
        color="#333"
      />
    </Container>
  )
}