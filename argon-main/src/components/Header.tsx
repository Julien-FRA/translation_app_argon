import { Header, MediaQuery, Title, Group, useMantineTheme, Burger } from '@mantine/core';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import Link from './Link';

interface CustomHeaderProps {
  height: number
}

const CustomHeader = ({ height }: CustomHeaderProps) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Header height={height} padding="md">
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened(o => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <Group position='apart'>
        <Link route="/">
          <Title order={3}>Argon</Title>
        </Link>
        <LanguageSelector />
      </Group>
    </Header>
  )
};

export default CustomHeader;
