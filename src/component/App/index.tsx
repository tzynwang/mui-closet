import React, { memo } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import StyleToggle from '@Component/Common/StyleToggle';
import ThemeName from '@Component/Common/ThemeName';
import ThemeProvider from '@Component/Layer/ThemeProvider';

import styles from './index.module.css';

function AppEntryPoint(): React.ReactElement {
  /* Main */
  return (
    <ThemeProvider>
      <div className={styles.hello}>
        <ThemeName />
        <StyleToggle />
        <Stack direction="row" gap={4}>
          <Chip label="default filled" color="default" variant="filled" />
          <Chip label="primary filled" color="primary" variant="filled" />
          <Chip label="secondary filled" color="secondary" variant="filled" />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default memo(AppEntryPoint);
