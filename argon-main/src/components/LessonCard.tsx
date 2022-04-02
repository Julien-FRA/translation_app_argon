import React from 'react'
import { Card, useMantineTheme, Text, ThemeIcon, Box, Group, Badge } from '@mantine/core';
import { useHover } from '@mantine/hooks';

interface LessonCardProps {
  icon: JSX.Element
  title?: string
  description?: string
  badge?: string
}

const LessonCard = ({ icon, title, description, badge }: LessonCardProps) => {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <Box sx={(theme) => ({
        maxWidth: '20rem',
        marginTop: theme.spacing.xl,
        cursor: 'pointer'
      })}
      >
      <Card ref={ref} shadow={hovered ? 'sm' : 'lg'} padding="lg" radius="lg" withBorder>
        <ThemeIcon radius="md" size="xl" color="dark">
          {icon}
        </ThemeIcon>

        <Box sx={(theme) => ({
          marginTop: theme.spacing.lg,
        })}>
          <Group position='apart'>
            {title &&
            <Text weight={700} size="xl">
              {title}
            </Text>}
            {badge &&
            <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{badge}</Badge>}
          </Group>
        </Box>

        {description &&
          <Text size="md" color="gray" style={{marginTop: theme.spacing.sm}}>
            {description}
          </Text>}
      </Card>
    </Box>
  )
}

export default LessonCard;
