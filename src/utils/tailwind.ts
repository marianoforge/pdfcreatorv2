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
					grey: '#999999',
					midGrey: '#efefefff',
					lightGrey: '#EFEFEF',
					section: {
						yellow: '#fdc646',
						green: '#9eca38',
						turquoise: '#14aa9c',
						purple: '#c763b0',
						red: '#df3640',
						orange: '#ee5a21',
						blue: '#4ba8df',
						light: {
							yellow: '#FFF2CC',
							green: '#D8EAAF',
							turquoise: '#A1DDD7',
							purple: '#E8C1DF',
							red: '#F6C3C6',
							orange: '#FACEBD',
							blue: '#CAE5F6',
						}
					},
					sectionLight: {
						yellow: '#FFF2CC',
						green: '#D8EAAF',
						turquoise: '#A1DDD7',
						purple: '#E8C1DF',
						red: '#F6C3C6',
						orange: '#FACEBD',
						blue: '#CAE5F6',
					},
					tag: {
						red: '#960018',
						orange: '#FFBF00',
						green: '#008000',
					},
				},
				fontFamily: {
					montserrat: 'Montserrat',
					aeonik: 'Aeonik',
				},
		},
	},
})
