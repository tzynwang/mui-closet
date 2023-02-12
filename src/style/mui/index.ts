import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendThemeCreator,
} from '@mui/material/styles';
import herMajesty from './colorSchemes/herMajesty';
import honeyAmethyst from './colorSchemes/honeyAmethyst';
import lakesideFox from './colorSchemes/lakesideFox';

declare module '@mui/material/styles' {
  interface ColorSchemeOverrides {
    herMajesty: true;
    honeyAmethyst: true;
    lakesideFox: true;
  }
}

/** 以 herMajesty 為預設樣式 */
const DEFAULT_THEME = extendThemeCreator(herMajesty);

export default DEFAULT_THEME;

export {
  CssVarsProvider,
  extendThemeCreator,
  herMajesty,
  honeyAmethyst,
  lakesideFox,
};
