import { Link } from "react-router-dom";

import {
  NavBrand,
  NavBrandLogo,
  NavContainer,
  NavLinkA,
  NavLinkItem,
  NavLinksContainer,
  NavLoginContainer,
} from "../../styled-components/navigation/navbar.styled";
import brandLogo from "../../assets/img/brand.jpg";
import { ButtonRounded } from "../../styled-components/button/button.styled";
function Navbar() {
  return (
    <NavContainer>
      <NavBrand to="/">
        <NavBrandLogo src={brandLogo} />
      </NavBrand>
      <NavLinksContainer>
        <NavLinkA to="/" draggable="false">
          <NavLinkItem>Home</NavLinkItem>
        </NavLinkA>
        <NavLinkA to="/find" draggable="false">
          <NavLinkItem>Find</NavLinkItem>
        </NavLinkA>
        <NavLinkA to="/bookshelf" draggable="false">
          <NavLinkItem>Bookshelf</NavLinkItem>
        </NavLinkA>
      </NavLinksContainer>
      <NavLoginContainer>
        <NavLinkA to="/login" draggable="false">
          <NavLinkItem>Sign in</NavLinkItem>
        </NavLinkA>
        <Link to="/register" draggable="false">
          <ButtonRounded btnType="primary">Sign up</ButtonRounded>
        </Link>
      </NavLoginContainer>
    </NavContainer>
  );
}

export default Navbar;
