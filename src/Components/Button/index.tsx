import {
  Pressable,
  View,
} from "react-native";
import { ReactElement, ReactEventHandler } from "react";
import { ButtonContainer } from "./styles";

interface Props {
  onClick?(event: ReactEventHandler): void;
  children?: string;
}

export default function Button({
  onClick,
  children,
}: Props) {

  return (
    <ButtonContainer
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
}
