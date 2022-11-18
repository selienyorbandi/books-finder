import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "./styled-components/layout/app-container/app-container.styled";
import { GlobalStyle } from "./styled-components/globalStyles.styled";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import BottomNav from "./components/bottomNav/BottomNav";
import Navbar from "./components/navbar/Navbar";

const Find = lazy(() => import("./pages/find/Find.page"));

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Suspense fallback={<></> /* loading */}>
        <BrowserRouter>
          <Navbar />
          <BottomNav />
          <Routes>
            <Route path="/" element={<Find />} />
            <Route path="/find" element={<Find />} />
            <Route path="/bookshelf" element={<Find />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AppContainer>
  );
}

export default App;
