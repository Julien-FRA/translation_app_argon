import { Title, Text, Box, Group } from '@mantine/core';
import React from 'react';

const NotFound = () => {
  return (
    <Box sx={(theme) => ({
      marginTop:'20rem',
    })}>
      <Group direction='column' spacing='lg' align='center'>
        <Title order={1}>404 Page introuvable</Title>
        <Text size="md" color={'gray'}>Vérifiez l'adresse web et réessayez, ou revenez à la page d'accueil de Argon.</Text>
      </Group>
    </Box>
  )
}

export default NotFound;
