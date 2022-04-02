import NavbarItem from './NavbarItem';
import { Group } from '@mantine/core';
import { FiHome, FiSettings, FiArchive, FiSearch, FiBook, FiHeadphones, FiAward } from "react-icons/fi";
import Link from './Link';
import Icon from './Icon';

const MainLinks = () => {
  return (
    <Group spacing='xs' direction='column' grow>
      <Link route="/">
        <NavbarItem
          title="Page d'accueil"
          subtitle="Revenir à l'accueil de Argon"
          icon={<Icon Type={FiHome} />}
        />
      </Link>
      <Link route="/search">
        <NavbarItem
          title='Recherche'
          subtitle='Ajouter des mots'
          icon={<Icon Type={FiSearch} />}
        />
      </Link>
      <Link route="/search">
        <NavbarItem
          title='Examples'
          subtitle="Plusieurs cas d'usage des mots"
          icon={<Icon Type={FiBook} />}
        />
      </Link>
      <Link route="/search">
        <NavbarItem
          title='Prononciations'
          subtitle="Comment prononcer les mots"
          icon={<Icon Type={FiHeadphones} />}
        />
      </Link>
      <Link route="/dictionnary">
        <NavbarItem
          title='Dictionnaire'
          subtitle='Souvergader les mots'
          icon={<Icon Type={FiArchive} />}
        />
      </Link>
      <Link route="/training">
        <NavbarItem
          title='Questionnaire'
          subtitle='Tester votre connaissance'
          icon={<Icon Type={FiAward} />}
        />
      </Link>
      <Link route="/">
        <NavbarItem
          title="Plus d'outils"
          subtitle='Bientôt disponible'
          icon={<Icon Type={FiSettings} />}
        />
      </Link>
    </Group>
  )
}

export default MainLinks;
