import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styled-components/globalStyles.styled";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import BottomNav from "./components/bottomNav/BottomNav";
import Navbar from "./components/navbar/Navbar";
import { AppContainer } from "./styled-components/layout/layout.styled";
import Loader from "./components/loader/Loader";

const Find = lazy(() => import("./pages/find/Find.page"));
const Book = lazy(() => import("./pages/book/Book.page"));
const SignIn = lazy(() => import("./pages/sign-in/Sign-in.page"));

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Navbar />
          <BottomNav />
          <Routes>
            <Route path="/" element={<Find />} />
            <Route path="/find" element={<Find />} />
            <Route path="/bookshelf" element={<Find />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AppContainer>
  );
}

export default App;
