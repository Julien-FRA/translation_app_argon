import 'dotenv/config';

interface config {
  PORT: string,
  DICTIONARY_API: string | undefined
}

const config: config = {
  PORT: process.env.PORT || "8000",
  DICTIONARY_API: process.env.DICTIONARY_API,
}

export default config;
