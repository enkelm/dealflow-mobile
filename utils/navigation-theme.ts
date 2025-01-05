import { Theme, DefaultTheme } from '@react-navigation/native'

const { fonts } = DefaultTheme

export const navigationThemes = new Map<'light' | 'dark', Theme>([
  [
    'light',
    {
      dark: false,
      colors: {
        primary: 'rgb(10, 132, 255)',
        background: 'rgb(1, 1, 1)',
        card: 'rgb(18, 18, 18)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
      },
      fonts,
    },
  ],
  [
    'dark',
    {
      dark: true,
      colors: {
        primary: 'rgb(10, 132, 255)',
        background: 'rgb(1, 1, 1)',
        card: 'rgb(18, 18, 18)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
      },
      fonts,
    },
  ],
])
