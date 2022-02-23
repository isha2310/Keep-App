import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    colors: {
        bg: 'white',
        fontColor: '#484848',
        accent: '#626262',
        border: '#efefef',
        focus: '#484848',
        shadow: '#414549',
        activeButton: '#eddeff'
    },
    contrast: '1',
    sizes: {
        borderWidth: '2px',
        borderRadius: '8px'
    },
    media: {
        mobile: '768px',
    }
}
export const darkTheme: DefaultTheme = {
    colors: {
        bg: "#202124",
        fontColor: '#efefef',
        accent: '#ababab',
        border: '#3d3d3d',
        focus: '#adadad',
        shadow: '#ffffff',
        activeButton: '#eddeff'
    },
    contrast: '0',
    sizes: {
        borderWidth: '2px',
        borderRadius: '8px'
    },
    media: {
        mobile: '768px',
    }
}