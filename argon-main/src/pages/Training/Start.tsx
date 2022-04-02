import React from 'react';
import { Container, Center, Title, Divider } from '@mantine/core';
import Welcome from '../../components/Welcome';

const Start = () => {
  return (
    <>
      <Welcome />
      <Divider my="sm" style={{marginTop: 50, marginBottom: 50}} />
      <Container size="md">
        <Center>
          <Title order={1}>Start with first {'word'}</Title>
        </Center>
      </Container>
    </>
  )
}

export default Start;
