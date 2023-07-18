import CloseIcon from "../Icons/CloseIcon/";
import { ButtonContainer } from "./style";

interface Props {
  onPress?(): void;
}

export default function CloseButton({
  onPress,
}: Props) {

  return (
    <ButtonContainer
      onPress={onPress}
    >
      <CloseIcon />
    </ButtonContainer>
  );
}
