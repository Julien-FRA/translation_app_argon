import React from 'react';
import { Outlet } from "react-router-dom";
import { AppShell, Container } from '@mantine/core';
import CustomHeader from '../components/Header';
import CustomNavbar from '../components/Navbar';

const Layout = () => {
  const headerHeight = 75;
  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar height={window.innerHeight - headerHeight} />}
      header={<CustomHeader height={headerHeight}/>}
    >
      <Container size="lg">
        <Outlet />
      </Container>
    </AppShell>
  );
}

export default Layout;
