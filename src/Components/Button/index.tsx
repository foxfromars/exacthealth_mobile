import { ReactEventHandler } from "react";
import { ButtonContainer, ButtonText } from "./styles";

interface Props {
  onClick?(event: ReactEventHandler): void;
  text?: string;
  color?: string;
  backgroundColor?: string;
}

export default function Button({
  onClick,
  text,
}: Props) {

  return (
    <ButtonContainer
      onPress={onClick}
    >
      <ButtonText>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
}
