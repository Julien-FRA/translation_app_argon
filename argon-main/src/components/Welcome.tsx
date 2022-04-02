import React from 'react';
import { Space, Group, Text, Title } from '@mantine/core';
import LessonCard from '../components/LessonCard';
import { FiEdit3, FiArchive } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import Link from '../components/Link';

interface WelcomeProps {
  username?: string
}

const Welcome = ({ username = "Youness" }: WelcomeProps) => {
  const { t } = useTranslation('translations', { keyPrefix: 'pages.index' });

  return (
    <>
      <Space h="md"/>
      <Group direction='column' spacing={'md'}>
        <Title order={1}>{t('hey')} {username},</Title>
        <Text color="gray">Commence maintenant à apprendre une nouvelle langue avec les différentes types d'apprentissage qu'on vous propose.</Text>
      </Group>
      <Space h="md"/>
      <Group spacing='lg' grow>
        <Link route="/search">
          <LessonCard
            title="Traduction"
            description="Traduire un ou plusieurs mots aux différentes langues"
            icon={<MdTranslate style={{width: '1.2rem', height: '1.2rem'}} />}
          />
        </Link>
        <Link route="/dictionnary">
          <LessonCard
            title="Dictionnaire"
            description="Souvegarder et ajouter les mots appris dans des collections"
            icon={<FiArchive style={{width: '1.2rem', height: '1.2rem'}} />}
          />
        </Link>
        <Link route="/training">
          <LessonCard
            title="Exercices"
            description="Commence a apprendre une nouvelle langue avec des exercices"
            icon={<FiEdit3 style={{width: '1.2rem', height: '1.2rem'}}
            />}
            badge='Nouveau'
          />
        </Link>
      </Group>
    </>
  )
}

export default Welcome;
