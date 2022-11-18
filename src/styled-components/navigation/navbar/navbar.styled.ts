import { styledVariables } from "../../variables.styled";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: none;

  @media screen and (min-width: 650px) {
    display: flex;
    background: ${styledVariables.$backgroundSecondaryColor};
    width: 100%;
    position: fixed;
    z-index: ${styledVariables.$zIndexFixed};
    top: 0;
    height: 70px;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`;

export const NavBrand = styled(Link)``;

export const NavBrandLogo = styled.img`
  height: 50px;
`;

export const NavLinksContainer = styled.ul`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NavLinkA = styled(NavLink)`
  text-decoration: none;
  filter: grayscale(1) contrast(0.5);
  color: ${styledVariables.$primaryColor};
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  &.active,
  &:hover {
    filter: none;
  }
`;

export const NavLinkItem = styled.li`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const NavLinkImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const NavLoginContainer = styled(NavLinksContainer)`
  width: fit-content;
  justify-content: center;
  gap: 1rem;
`;
