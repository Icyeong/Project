import { Input } from "./SearchInput.style";
import { InputProps } from "../input/Input";

export default function SearchInput({ onChange }: InputProps) {
  return <Input type="text" onChange={onChange} placeholder="검색" />;
}
