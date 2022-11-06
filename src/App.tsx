import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "./redux/store";
import { AppContainer } from "./styled-components/app-container/app-container.styled";
import { GlobalStyle } from "./styled-components/globalStyles.styled";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import BottomNav from "./components/bottomNav/BottomNav";
import Navbar from "./components/navbar/Navbar";

const Find = lazy(() => import("./pages/find/Find.page"));

function App() {
  const store = useSelector((state: RootState) => state.reducer);

  return (
    <AppContainer>
      <GlobalStyle />
      <Suspense fallback={<></> /* loading */}>
        <BrowserRouter>
          <Navbar />
          <BottomNav />
          <Routes>
            <Route path="/find" element={<Find />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AppContainer>
  );
}

export default App;
