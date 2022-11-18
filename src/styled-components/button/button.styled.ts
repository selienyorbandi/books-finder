import styled from "styled-components";
import { styledVariables } from "../variables.styled";

const defaultBtnType = {
  basic: styledVariables.$primaryColor,
  hover: styledVariables.$primaryColorHover,
  active: styledVariables.$primaryColorActive,
};

const handleBtnType = (btnType?: string) => {
  switch (btnType) {
    case "primary":
      return {
        basic: styledVariables.$primaryColor,
        hover: styledVariables.$primaryColorHover,
        active: styledVariables.$primaryColorActive,
      };
    case "secondary":
      return {
        basic: styledVariables.$secondaryColor,
        hover: styledVariables.$secondaryColorHover,
        active: styledVariables.$secondaryColorActive,
      };
    case "success":
      return {
        basic: styledVariables.$successColor,
        hover: styledVariables.$successColorHover,
        active: styledVariables.$successColorActive,
      };
    case "danger":
      return {
        basic: styledVariables.$dangerColor,
        hover: styledVariables.$dangerColorHover,
        active: styledVariables.$dangerColorActive,
      };
    default:
      return defaultBtnType;
  }
};

export const Button = styled.button<{
  btnType: string;
  btnHeight?: string;
}>`
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  padding: 15px 20px;
  border: none;
  font-size: 20px;
  color: #fff;
  height: ${({ btnHeight }) => (btnHeight ? btnHeight + "px" : "fit-content")};
  display: flex;
  justify-items: center;
  align-items: center;
  background: ${({ btnType }) => handleBtnType(btnType).basic};

  &:focus,
  &:active {
    background: ${({ btnType }) => handleBtnType(btnType).active};
  }

  &:hover {
    background: ${({ btnType }) => handleBtnType(btnType).hover};
  }

  &:active {
    top: 1px;
  }
`;

export const ButtonOutline = styled(Button)`
  background: none;
  border: solid 1px ${({ btnType }) => handleBtnType(btnType).basic};
  color: ${({ btnType }) => handleBtnType(btnType).basic};

  &:focus,
  &:active,
  &:hover {
    color: #fff;
  }
`;

export const ButtonRounded = styled(Button)`
  border-radius: 35px;
  padding: 10px 22px;
`;
