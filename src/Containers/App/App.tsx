import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import { darkTheme, lightTheme } from '../../theme';
import { Layout, Wrapper } from './utils.styled.js';
import { RootState, AppDispatch } from '../../configStore';
import Sidebar from '../../Components/Sidebar';
import { ToggleDarkMode } from './AppProvider/action';
import { routesConfig } from '../../configRoute';
import Notes from '../Notes';
import Archieves from '../Archieves';

function App() {
  const isdarkModeActive = useSelector(
    (state: RootState) => state.app.darkModeActive,
    shallowEqual,
  );
  const dispatch = useDispatch<AppDispatch>();

  const [active, setActive] = useState('Keep');
  const [isSideBarActive, setSideBarActive] = useState(false);

  const handleActive = () => {
    let val: string = active === 'Keep' ? 'Archieves' : 'Keep';
    setActive(val);
  };

  const handleSideBarActive = () => {
    setSideBarActive(!isSideBarActive);
  };

  const toggleDarkMode = () => {
    dispatch(ToggleDarkMode());
  };

  const sideBarWidth: string[] = ['4', '14'];
  const alignment: string[] = ['flex-start', 'flex-end'];

  return (
    <ThemeProvider
      theme={isdarkModeActive ? darkTheme : lightTheme}
    >
      <Wrapper>
        <Navbar
          active={active}
          handleSideBarActive={handleSideBarActive}
          isDarkModeActive={isdarkModeActive}
          alignment={alignment}
          toggleDarkMode={toggleDarkMode}
        />
        <div
          style={{ display: 'flex' }}
        >
          <Sidebar
            active={active}
            handleActiveState={handleActive}
            isSidebarActive={isSideBarActive}
            sideBarWidth={sideBarWidth}
          />

          <Layout>
            <Outlet />
          </Layout>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
