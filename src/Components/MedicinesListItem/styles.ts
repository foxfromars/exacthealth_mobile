import styled from "styled-components";
import theme from "../../Theme/";

export const MedicinesListItemContainer = styled.View`
  display: flex;
  align-items: center;
  min-height:  100px;
`;

export const PrimaryText = styled.Text`
  color: ${theme.palette?.text?.main};
  font-weight: 800;
`;

export const SecondaryText = styled.Text`
  color: ${theme.palette?.subtext?.main};
`;
