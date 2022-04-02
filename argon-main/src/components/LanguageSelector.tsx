import { NativeSelect } from "@mantine/core";
import { FiMapPin } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const data = [
    { value: 'fr', label: 'Francais' },
    { value: 'en', label: 'English' },
  ]

  return (
    <NativeSelect
      icon={<FiMapPin />}
      data={data}
      placeholder="Please choose your language"
      variant="filled"
      radius="md"
      onChange={(event) => changeLanguage(event.currentTarget.value)}
      size="md"
      required
    />
  )
}

export default LanguageSelector;
