import { Input } from "@mantine/core";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <Input
      variant="filled"
      size="md"
      radius={'md'}
      icon={<FiSearch />}
      placeholder="Recherche"
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  )
}

export default SearchBar;
