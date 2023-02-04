import { styledVariables } from "../variables.styled";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BottomNavContainer = styled.nav`
  background: ${styledVariables.$backgroundSecondaryColor};
  width: 100%;
  position: fixed;
  z-index: ${styledVariables.$zIndexFixed};
  bottom: 0;
  height: 70px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

export const BottomNavLinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BottomNavLink = styled(NavLink)`
  text-decoration: none;
  filter: grayscale(1) contrast(0.5);
  color: ${styledVariables.$primaryColor};

  &.active {
    filter: none;
  }
`;

export const BottomNavLinkItem = styled.li`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const BottomNavLinkImg = styled.img`
  width: 25px;
  height: 25px;
`;
