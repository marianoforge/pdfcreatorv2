import { createTw } from 'react-pdf-tailwind'

export const tw = createTw({
    content: ['../index.css'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#004039',
                    50: '#E6ECEB',
                    100: '#B0C4C2',
                    200: '#8AA7A4',
                    400: '#336661',
                    500: '#004039',
                    600: '#003A34',
                },
                secondary: '#FF8A5D',
                tertiary: '#FFEFDA',
                neutral: {
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#CCCCCC',
                    400: '#B3B3B3',
                    500: '#999999',
                    600: '#808080',
                    700: '#666666',
                    800: '#444444',
                    900: '#333333',
                },
                white: '#FFFFFF',
                black: '#000000',
            },
            fontFamily: {
                montserrat: 'Montserrat',
                aeonik: 'Aeonik',
            },
        },
    },
})
