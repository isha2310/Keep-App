import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Navbar from "../../Components/Navbar";
import { darkTheme, lightTheme } from "../../theme";
import { Wrapper } from "./utils.styled.js";
import {RootState, AppDispatch} from "../../configStore"
import Sidebar from "../../Components/Sidebar";
import { useState } from "react";

const App = () => {
  const isdarkModeActive = useSelector((state: RootState) => state.app.darkModeActive, shallowEqual);

  const [active, setActive] = useState("Keep")

  const handleActive = () => {
    let val: string = active === "Keep" ? "Archieves" : "Keep"
    setActive(val)
  }

  return (
      <ThemeProvider theme={isdarkModeActive ? darkTheme : lightTheme}>
          <Wrapper>
            <Navbar active={active} />
            <Sidebar active={active} handleActiveState = { handleActive} />
          </Wrapper>
      </ThemeProvider>
  );
};

export default App;
