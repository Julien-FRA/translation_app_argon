import React, { useEffect, useState } from 'react';
import { Container, Divider, Box, Title, Text, Group, RingProgress, Button, useMantineTheme } from '@mantine/core';
import Confetti from 'react-confetti';
import { useViewportSize } from '@mantine/hooks';
import Link from '../../components/Link';
import Welcome from '../../components/Welcome';

const Results = () => {
  return (
    <>
      <Welcome />
      <Divider my="sm" style={{marginTop: 50, marginBottom: 50}} />
      <Container size="md">
        <Box sx={(theme) => ({ marginBlockStart: theme.spacing.xl})}>
          <Title order={2}>
            Resultats
          </Title>
          <UserLevel name='Youness' level={96} />
        </Box>
      </Container>
    </>
  )
}

interface UserLevelProps {
  name: string
  level?: number
}

const UserLevel = ({ name, level = 1 }: UserLevelProps) => {
  const [levelMessage, setLevelMessage] = useState('');
  const [levelColor, setLevelColor] = useState('red');
  const theme = useMantineTheme();
  const { height, width } = useViewportSize();

  useEffect(() => {
    if (level < 0 && level > 100) return;
    if (level > 0) {
      setLevelMessage('Médiocre');
      setLevelColor(theme.colors.red[4]);
    }
    if (level > 30) {
      setLevelMessage('Intermédiaire');
      setLevelColor(theme.colors.orange[4]);
    };
    if (level > 70) {
      setLevelMessage('Très bien')
      setLevelColor(theme.colors.teal[4]);
    };
    if (level > 95) {
      setLevelMessage('Excellent');
      setLevelColor(theme.colors.green[4]);
    };
  }, [level]);

  return (
    <>
      <Group spacing="xl" grow>
        <Group direction='column' spacing='lg' sx={(theme) => ({ paddingBlockStart: theme.spacing.md, paddingBlockEnd: theme.spacing.md})}>
          <Title order={3}>Merci {name}, votre niveau de langue est {levelMessage}.</Title>
          <Text size="md" color="gray">D’après ce que vous nous avez confié et les exercices que vous avez reussi, on a conclut que vous avez encore des difficultés avec ces mots.</Text>
          <Link route="/training/start">
            <Button color="dark" size="md">
              Refaire l'excercice
            </Button>
          </Link>
        </Group>
        <RingProgress
          style={{textAlign: 'center'}}
          size={240}
          thickness={24}
          label={
            <Group direction='column' align='center' spacing={0}>
              <Title order={4}>
                {level}%
              </Title>
              <Text size='xs'>
                {levelMessage}
              </Text>
            </Group>
          }
          sections={[
            { value: level, color: levelColor }
          ]}
        />
      </Group>
      { level > 95 ?
        <Confetti
        width={width}
        height={height}
      /> : ''}
    </>
  )
}

export default Results;
