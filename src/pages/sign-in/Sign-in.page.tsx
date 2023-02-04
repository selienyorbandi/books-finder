import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import { resetAuthentication } from "../../redux/slices/authentication.slice";
import { RootState } from "../../redux/store";
import { Button } from "../../styled-components/button/button.styled";
import { MainContainer } from "../../styled-components/layout/layout.styled";
import { LogguedContainer } from "./Sign-in.styled";

function SignIn() {
  const dispatch = useDispatch();
  const authentication = useSelector((state: RootState) => state.authenticationReducer);
  const { forceUpdate, setForceUpdate } = useForceUpdate();
  useAuthentication("googleSignInBtn", forceUpdate);

  const handleLogout = () => {
    dispatch(resetAuthentication());
    setForceUpdate(!forceUpdate);
  };

  return (
    <MainContainer>
      {authentication.jwt.length > 0 ? (
        <LogguedContainer>
          <h1>Welcome, {authentication.name}</h1>
          {authentication.picture !== "" ? (
            <img
              src={
                authentication.picture ||
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
              alt={`Profile picture of ${authentication.name}`}
              referrerPolicy="no-referrer"></img>
          ) : (
            <></>
          )}

          <Button btnType="primary">
            <Link to="/bookshelf">My Bookshelf</Link>
          </Button>
          <Button btnType="danger" onClick={handleLogout}>
            Sign out
          </Button>
        </LogguedContainer>
      ) : (
        <>
          <h1>SIGN IN</h1>
        </>
      )}
      {authentication.jwt.length > 0 ? <></> : <div id="googleSignInBtn"></div>}
    </MainContainer>
  );
}

export default SignIn;
