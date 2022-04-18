import { FC } from 'react';
import {
  Wrapper,
  HamburgerButton,
  HamburgerLines,
  Logo,
  Search,
  Container,
  ToggleSlider,
  ToggleButton,
} from './utils.styled';

type Props = {
    active: string,
    handleSideBarActive: () => void,
    isDarkModeActive: boolean,
    alignment: string[],
    toggleDarkMode: () => void
}

const Navbar: FC<Props> = ({
  active, handleSideBarActive, isDarkModeActive, alignment, toggleDarkMode,
}) => {
  // console.log(isActive)
  let alignSelf = { align: (isDarkModeActive ? alignment[1] : alignment[0]) };

  return (
    <Wrapper>
      <HamburgerButton
        onClick={handleSideBarActive}
      >
        <HamburgerLines />
        <HamburgerLines />
        <HamburgerLines />
      </HamburgerButton>
      <Container>
        <Logo>{active}</Logo>
        <Search
          placeholder="Search"
        />
      </Container>
      <ToggleSlider
        {...alignSelf}
        onClick={toggleDarkMode}
      >
        <ToggleButton />
      </ToggleSlider>
    </Wrapper>
  );
};

export default Navbar;
