import React from 'react';
import { Group, Text, useMantineTheme, ActionIcon, MantineNumberSize } from '@mantine/core';
import { useHover } from "@mantine/hooks";

interface NavbarItemProps {
  icon: JSX.Element
  title: string
  subtitle: string
  iconSize?: MantineNumberSize
  iconRadius?: MantineNumberSize
}

const NavbarItem = ({ icon, iconSize, iconRadius, title, subtitle }: NavbarItemProps) => {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} style={{cursor: 'pointer',padding: theme.spacing.sm, borderRadius: theme.radius.md, backgroundColor: hovered ? theme.colors.gray[1] : 'transparent'}}>
      <Group spacing="lg" noWrap>
        <ActionIcon size={iconSize ? iconSize : 'md'} color="dark" radius={iconRadius ? iconRadius : 'md'} variant="filled">
          {icon}
        </ActionIcon>

        <Group direction="column" style={{rowGap: 0, justifyContent: 'center'}}>
          <Text weight={600} size="sm">{title}</Text>
          <Text size="xs" color="gray">{subtitle}</Text>
        </Group>
      </Group>
    </div>
  )
}

export default NavbarItem;
