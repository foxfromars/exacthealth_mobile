import styled from "styled-components";

const floatButtonWidth = 60;

export const FloatButton = styled.Pressable`
  position: absolute;
  background-color: blue;
  width: ${floatButtonWidth}px;
  height: ${floatButtonWidth}px;
  border-radius: ${floatButtonWidth/2}px;
  bottom: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
