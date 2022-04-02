import React from 'react';
import { Container, Space, Group, Text, Title, Button, Divider } from '@mantine/core';
import Icon from '../../components/Icon';
import { FiAward } from "react-icons/fi";
import Link from '../../components/Link';
import Welcome from '../../components/Welcome';

const Index = () => {
  return (
    <>
      <Welcome />
      <Divider my="sm" style={{marginTop: 50, marginBottom: 50}} />
      <Container size="md">
        <Space h="lg" />
        <Group direction="column">
          <Title order={1}>Questionnaire</Title>
          <Text color="gray" style={{marginBottom: 20}}>Challenger votre niveau de connaissane de langue. Nous avons donc créé ces excercices pour vous aider à identifier votre niveau et vous proposer les mots a apprendre prochainement dans votre journey.</Text>

          <Link route="/training/start">
            <Button color="dark" size="md" leftIcon={<Icon Type={FiAward} />}>
              Commencer le questionnaire
            </Button>
          </Link>
        </Group>
      </Container>
    </>
  )
}

export default Index;
