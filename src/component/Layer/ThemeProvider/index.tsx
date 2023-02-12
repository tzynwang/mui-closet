import React, { memo, useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SchemeContext from '@Model/SchemeContext';
import { SCHEME_OPTION } from '@Model/GeneralModel';
import emotionCache, { EmotionCacheProvider } from '@Style/emotion';
import DEFAULT_THEME, {
  CssVarsProvider,
  extendThemeCreator,
  honeyAmethyst,
  lakesideFox,
} from '@Style/mui';
import type { ThemeProviderProps } from './types';

function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
  /* States */
  const [schemeOption, setSchemeOption] = useState<SCHEME_OPTION>(
    SCHEME_OPTION.herMajesty
  );
  const [themByScheme, setThemeByScheme] = useState(DEFAULT_THEME);

  /* Hooks */
  useEffect(() => {
    switch (schemeOption) {
      case SCHEME_OPTION.honeyAmethyst:
        setThemeByScheme(extendThemeCreator(honeyAmethyst));
        break;
      case SCHEME_OPTION.lakesideFox:
        setThemeByScheme(extendThemeCreator(lakesideFox));
        break;
      case SCHEME_OPTION.herMajesty:
      default:
        setThemeByScheme(DEFAULT_THEME);
    }
  }, [schemeOption]);

  /* Main */
  return (
    <SchemeContext.Provider
      value={{
        schemeOption,
        setSchemeOption,
      }}
    >
      <CssVarsProvider defaultMode="dark" theme={themByScheme}>
        <EmotionCacheProvider value={emotionCache}>
          <CssBaseline />
          {children}
        </EmotionCacheProvider>
      </CssVarsProvider>
    </SchemeContext.Provider>
  );
}

export default memo(ThemeProvider);
