import { DefaultTheme } from 'styled-components';

const sizes = {
    borderWidth: '2px',
    borderRadius: '8px',
};

const media = {
    mobile: '768px',
};

export const lightTheme: DefaultTheme = {
    colors: {
        bg: 'white',
        fontColor: '#484848',
        accent: '#626262',
        border: '#efefef',
        focus: '#484848',
        shadow: '#41454959',
        activeButton: '#eddeff',
    },
    contrast: '1',
    sizes,
    media,
};
export const darkTheme: DefaultTheme = {
    colors: {
        bg: '#202124',
        fontColor: '#ababab',
        accent: '#ababab',
        border: '#3d3d3d',
        focus: '#adadad',
        shadow: '#00000059',
        activeButton: '#eddeff',
    },
    contrast: '0',
    sizes,
    media,
};
