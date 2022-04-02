import { Group, Text, useMantineTheme, ThemeIcon } from '@mantine/core';
import { useHover } from "@mantine/hooks";
import { FiUser, FiChevronRight } from "react-icons/fi";
import Icon from './Icon';

interface UserProps {
  username: string
  email: string
}

const User = ({ username, email }: UserProps) => {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} style={{cursor: 'pointer',paddingInline: theme.spacing.sm, paddingBlock: theme.spacing.lg, borderRadius: theme.radius.md, backgroundColor: hovered ? theme.colors.gray[1] : 'transparent'}}>
      <Group spacing="lg" noWrap>
        <ThemeIcon size='lg' radius='md' variant="filled" color={'dark'}>
          <Icon Type={FiUser} size={'1.2rem'} />
        </ThemeIcon>

        <Group direction="column" style={{rowGap: 0, justifyContent: 'center'}}>
          <Text weight={600} size="sm">{username}</Text>
          <Text size="xs" color="gray">{email}</Text>
        </Group>

        <FiChevronRight style={{width: '1rem', height: '1rem'}}/>
      </Group>
    </div>
  )
}

export default User;
