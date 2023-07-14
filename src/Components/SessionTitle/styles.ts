import styled from "styled-components";
import theme from "../../Theme";

//@ts-ignore
export const HeaderText = styled.Text`
  display: flex;
  flex-direction: row;
  font-size: 40px; 
  text-align: left;
  width: 100%;
  vertical-align: middle;
  color: ${theme.palette?.text?.main};
  padding-left: ${theme.dimensions.screenWidth/18}px;
`;

//@ts-ignore
export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 140px;
`;
