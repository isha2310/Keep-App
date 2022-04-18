import styled from 'styled-components';

export const AddNoteTile = styled.div`
  border: none;
  box-shadow: 0px 0px 7px 0px ${(props) => props.theme.colors.shadow};
  width: 60%;
  margin: 50px auto;
  padding: 1px 10px;
  color: ${(props) => props.theme.colors.fontColor};
`;

export const AddTitle = styled.input`
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.fontColor};
    background-color: ${(props) => props.theme.colors.bg};
    font-size: 1.2rem ;
    width: 100%;
    margin-bottom: 1rem;
`;

export const NoteBody = styled.textarea`
    resize: none;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.fontColor};
    background-color: ${(props) => props.theme.colors.bg};
    font-size: 1rem ;
    width: 100%;
    margin-bottom: 2rem;
`;
export const IconButtonClose = styled.input`
    background: transparent ;
    border: none ;
    outline: none;
    filter: contrast(0.2);
    font-size: 1rem;
    height: 2rem;
    padding: 5px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 8px;
    &:hover{
       box-shadow:  0px 0px 7px 0px ${(props) => props.theme.colors.shadow};
    }
`;
export const IconButtonImg = styled.img`
    height: 1.2rem ;
`;
export const IconButton = styled.button`
    background: transparent ;
    border: none ;
    outline: none;
    filter: contrast(0.2);
    font-size: 1rem;
    height: 2rem;
    padding: 5px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 8px;
    &:hover{
       box-shadow:  0px 0px 7px 0px ${(props) => props.theme.colors.shadow};
    }
`;
