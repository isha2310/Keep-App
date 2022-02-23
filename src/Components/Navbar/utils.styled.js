import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.bg };
    width: 100%;
    height: 2.5rem;
    display: flex;
    padding: 8px 0px;
    align-items: center;
    position: relative;
    border-bottom: ${(props) => props.theme.sizes.borderWidth } solid ${(props) => props.theme.colors.border };
    box-shadow: 0px 2px 7px 1px ${(props) => props.theme.colors.border };
`
export const HamburgerButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 2.8rem;
    height: 100%;
    justify-content: center;
    margin: auto 10px;
    cursor: pointer;
    &:hover{
        border-radius:  50%;
        background:  ${(props) => props.theme.colors.border };
    }
    @media screen and (max-width: ${(props) => props.theme.media.mobile }){
        margin: 0;
    }
`
export const HamburgerLines = styled.div`
    background-color: ${(props) => props.theme.colors.accent };
    width: 41%;
    height: 0.15rem;
    border-radius: ${(props) => props.theme.sizes.borderRadius };
    margin: 1.5px auto;
    @media screen and (max-width: ${(props) => props.theme.media.mobile }){
        margin: 0.8px auto;
    }
`
export const Container = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    /* margin-left: 8px; */
    justify-content: space-between;
`

export const Logo = styled.p`
    color: ${(props) => props.theme.colors.accent };
    font-weight: 500;
    margin: 0px;
    margin-right: 20px;
    font-size: 1.2rem;
    line-height: 1.8rem;
`
export const Search = styled.input`
    border: ${(props) => props.theme.sizes.borderWidth } solid ${(props) => props.theme.colors.border };
    border-radius: ${(props) => props.theme.sizes.borderRadius };
    padding: 12px;
    width: 60%;
    background: #efefefc9;
    transition: ease-out 0.2s box-shadow;
    &:focus-visible{
        outline: ${(props) => props.theme.colors.focus };
        background: white;
        border-color: ${(props) => props.theme.colors.border };
        /* box-shadow: 0px 0px 2px 0px #efefef; */
        box-shadow: 0px 1px 1px 0 ${(props) => props.theme.colors.shadow }4d, 0px 1px 3px 1px ${(props) => props.theme.colors.shadow }26;
    }
`