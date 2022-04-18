import styled from 'styled-components';

export const Wrapper = styled.div`
    height: calc(100vh - 3rem - 18px);
    /* width:4.5rem; */
    ${(props) => props.widths && `width: ${props.widths}rem`};
    ${(props) => props.boxShadow && `box-shadow: 0px 11px 5px 5px ${props.theme.colors.shadow}`};
    transition: ease-in 0.2s width;
    position: absolute;
    z-index: 11;
    overflow: hidden;
    background: ${(props) => props.theme.colors.bg};
    &:hover{
        width: 14rem;
        box-shadow: 0px 11px 5px 5px ${(props) => props.theme.colors.shadow};
    }
`;
export const SideButton = styled.button`
    margin: 10px 15px;
    border: none;
    padding:2px 0px;
    display: flex;
    width: 100%;
    background: ${(props) => props.theme.colors.bg};
    align-items: center;
    &:hover{
        margin-left: 0px;
        padding-left: 15px;
        background: ${(props) => props.theme.colors.activeButton};
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        width: 99%;
        >img{
            opacity: 0.8;
            border-color: transparent!important;
            filter: contrast(1);
        }
        >p{
            color: #202020!important;
        }
    }
`;
export const IconButton = styled.img`
    height: 1.2rem;
    width: 1.2rem;
    opacity: 0.6;
    border-radius: 50%;
    padding: 8px;
    border: 2px solid transparent;
    filter: contrast(${(props) => props.theme.contrast});
    &:hover{
        opacity: 0.8;
    }
`;
export const TextButton = styled.p`
    color: ${(props) => props.theme.colors.fontColor}94;
    font-size: 1rem;
    font-weight: 700;
    font-family: sans-serif;
    margin: 0;
    margin-left: 25px;
`;
