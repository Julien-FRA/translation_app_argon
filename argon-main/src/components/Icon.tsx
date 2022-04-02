import { IconType } from "react-icons";

interface IconProps {
  Type: IconType
  size?: string | number
}

const Icon = ({ Type, size = '1rem' }: IconProps) => {
  return (
    <Type size={size} />
  )
}

export default Icon;
