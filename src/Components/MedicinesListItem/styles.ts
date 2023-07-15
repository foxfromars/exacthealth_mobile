import styled from "styled-components";
import theme from "../../Theme/";

export const MedicinesListItemContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100px;
  border: solid 1px grey;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${(props) => props.backgroundColor};
  padding-left: 5px;
  padding-rigth: 10px;
`;

export const PrimaryText = styled.Text`
  color: ${theme.palette?.text?.main};
  font-weight: 900;
`;

export const SecondaryText = styled.Text`
  color: ${theme.palette?.subtext?.main};
`;

export const QuantityValue = styled.Text`
  color: ${theme.palette?.subtext?.main};
`;


