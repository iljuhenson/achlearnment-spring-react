import type { Preview } from '@storybook/react-vite'

import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';
import primary from "../src/components/Themes/primary";
import {GlobalStyles} from "@mui/material";
import {ThemeProvider} from "styled-components";

const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//        color: /(background|color)$/i,
//        date: /Date$/i,
//       },
//     },
//
//     a11y: {
//       // 'todo' - show a11y violations in the test UI only
//       // 'error' - fail CI on a11y violations
//       // 'off' - skip a11y checks entirely
//       test: 'todo'
//     }
//   },
//
  decorators: [withThemeFromJSXProvider({
    GlobalStyles: GlobalStyles,
    Provider: ThemeProvider,
    themes: {
        primary: primary,
      // Provide your custom themes here
      // light: lightTheme,
      // dark: darkTheme,
    },
    defaultTheme: 'primary',
  })]
};
//
export default preview;