import { MantineTheme } from '@mantine/core';

interface Constants {
  theme: object | MantineTheme,
  apiHost: string
}

const constants: Constants = {
  theme: {},
  apiHost: "http://localhost:8000",
}

export default constants;
