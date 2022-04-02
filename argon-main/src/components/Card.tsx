import { useDefinition } from '../hooks';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Skeleton, Alert } from '@mantine/core';
import * as utils from '../utilities'

interface WordCardProps {
  word: string
}

const WordCard = (props: WordCardProps) => {
  const { data, isLoading, isError } = useDefinition(props.word);
  const { word, meanings } = data[0];

  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  if (isError) {
    return (
      <Alert title="Error!" color="red">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </Alert>
    )
  }

  if (isLoading) {
    return (
      <Skeleton height={400} width="80%" />
    );
  };

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src="./image.jpeg" height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{utils.capitalize(word)}</Text>
          <Badge color="pink" variant="light">
            Definition
          </Badge>
        </Group>

        {meanings.map((meaning, index) =>
          <Text key={index} size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {meaning.definitions[0].definition}
          </Text>
        )}

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Check definition
        </Button>
      </Card>
    </div>
  )
};

export default WordCard;

