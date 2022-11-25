import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleAuthRes } from "../../models/user.interface";
import { logInUser, logOutUser } from "../../redux/slices/user.slice";
import { RootState } from "../../redux/store";
import { signInWithGoogle } from "../../services/auth.service";
import { Button } from "../../styled-components/button/button.styled";
import { MainContainer } from "../../styled-components/layout/layout.styled";
import { LogguedContainer } from "./Sign-in.styled";
import "./googleAuth.styles.css";

function SignIn() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.userReducer);

  const handleLogin = (res: GoogleAuthRes) => {
    sessionStorage.setItem("jwt.books-finder", JSON.stringify(res));
    dispatch(logInUser(res));
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("jwt.books-finder");
    dispatch(logOutUser());
    location.reload();
  };

  useEffect(() => {
    signInWithGoogle("googleSignIn", handleLogin);
  }, []);

  return (
    <MainContainer>
      {user.jwt ? (
        <LogguedContainer>
          <h1>Welcome, {user.name}</h1>
          <img
            src={
              user.picture ||
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            }
            alt={`Profile picture of ${user.name}`}></img>
          <Button btnType="primary">
            <Link to="/bookshelf">My Bookshelf</Link>
          </Button>
          <Button btnType="danger" onClick={() => handleSignOut()}>
            Sign out
          </Button>
        </LogguedContainer>
      ) : (
        <>
          <h1>SIGN IN</h1>
        </>
      )}
      {user.jwt ? <></> : <div id="googleSignIn"></div>}
    </MainContainer>
  );
}
export default SignIn;
