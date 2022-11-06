import {
  BottomNavContainer,
  BottomNavLink,
  BottomNavLinkImg,
  BottomNavLinkItem,
  BottomNavLinksContainer,
} from "../../styled-components/bottom-nav/bottomNav.styled";
import homeIco from "../../assets/img/icon _home_.png";
import findIco from "../../assets/img/icon _Search_.png";
import bookshelfIco from "../../assets/img/icon _library solid_.png";

function BottomNav() {
  return (
    <BottomNavContainer>
      <BottomNavLinksContainer>
        <BottomNavLink to="/" draggable="false">
          <BottomNavLinkItem>
            Home
            <BottomNavLinkImg src={homeIco} alt="Home icon" draggable="false"></BottomNavLinkImg>
          </BottomNavLinkItem>
        </BottomNavLink>
        <BottomNavLink to="/find" draggable="false">
          <BottomNavLinkItem>
            Find
            <BottomNavLinkImg src={findIco} alt="Find icon" draggable="false"></BottomNavLinkImg>
          </BottomNavLinkItem>
        </BottomNavLink>
        <BottomNavLink to="/bookshelf" draggable="false">
          <BottomNavLinkItem>
            Bookshelf
            <BottomNavLinkImg
              src={bookshelfIco}
              alt="Bookshelf icon"
              draggable="false"></BottomNavLinkImg>
          </BottomNavLinkItem>
        </BottomNavLink>
      </BottomNavLinksContainer>
    </BottomNavContainer>
  );
}
export default BottomNav;
