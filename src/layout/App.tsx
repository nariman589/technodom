import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../theme";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Auth from "./auth/Auth";
import { Provider } from "react-redux";
import { store } from "store/store";

function App() {
  const [toggleTheme, setToggleTheme] = useState<"ligth" | "dark">("ligth");

  const localtion = useLocation();

  return (
    <Provider store={store}>
      <ThemeProvider theme={toggleTheme === "ligth" ? theme : darkTheme}>
        <GlobalStyles />
        <FormsWrapper>
          {localtion.pathname === "/" ? <Auth /> : <Outlet />}
        </FormsWrapper>
      </ThemeProvider>
    </Provider>
  );
}

const FormsWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyles = createGlobalStyle<any>`
body {
  margin: 0;
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: var(--text-color);
  background: ${({ theme }) => theme.background};
}

`;

export default App;
