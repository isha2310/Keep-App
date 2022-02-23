import { FC } from "react";
import {
  Wrapper,
  HamburgerButton,
  HamburgerLines,
  Logo,
  Search,
  Container,
} from "./utils.styled";

type Props = {
    active: string
}

const Navbar: FC<Props> = ({active}) => {
  // console.log(isActive)
  return (
    <Wrapper>
      <HamburgerButton>
        <HamburgerLines />
        <HamburgerLines />
        <HamburgerLines />
      </HamburgerButton>
      <Container>
        <Logo>{active}</Logo>
        <Search placeholder="Search" />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
