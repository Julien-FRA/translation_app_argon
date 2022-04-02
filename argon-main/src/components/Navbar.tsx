import { Divider, Navbar, Space } from '@mantine/core';
import MainLinks from './MainLinks';
import User from './User';
import Link from './Link';

interface CustomNavbarProps {
  height: number
}

const CustomNavbar = ({ height }: CustomNavbarProps) => {
  return (
    <Navbar
      padding="sm"
      hiddenBreakpoint="sm"
      hidden={false}
      width={{sm: 280, lg: 320}}
      height={height}
    >
      <Navbar.Section grow>
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <Divider color={'gray'}/>
      </Navbar.Section>
      <Navbar.Section>
        <Space h={'sm'}/>
        <Link route="/account">
          <User
            username='Youness Idbakkasse'
            email='youness@idbakkasse.com'
          />
        </Link>
      </Navbar.Section>
    </Navbar>
  )
};

export default CustomNavbar;

