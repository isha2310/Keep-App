import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: absolute;
    background: ${(props) => props.theme.colors.bg};
    transition: ease-in 0.2s;
`;

export const Layout = styled.div`
    width: 100%;
`;
